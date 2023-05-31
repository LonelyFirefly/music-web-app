import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { getSmallestImageFromAlbum } from "@/utils/getSmallestImageFromAlbum";
import { useState } from "react";

export function SongRadioPlaylistItem({ song, key, index }) {
	const { isPlaying, setIsPlaying } = useState(false);
	const albumImages = song.album.images;
	const albumCoverUrl = getSmallestImageFromAlbum(albumImages).url;
	const songName = song.name;
	const artistName = song.artists[0].name;
	const albumName = song.album.name;
	const songDuration = convertFromMsToSec(song.duration_ms);
	return (
		<div className="flex px-5 pt-2.5 pb-1.5">
			<div className="flex w-1/2">
				<div className="self-center pr-3.5">
					{isPlaying ? (
						<img
							className="hidden hover:block"
							alt="pause-arrow"
							src="/images/dark-theme/icon-dark-theme-pause-arrow.svg"
						/>
					) : (
						<img
							className="hidden hover:block"
							alt="play-arrow"
							src="/images/dark-theme/icon-dark-theme-play-arrow.svg"
						/>
					)}
					<span className="hover:hidden">{index}</span>
				</div>
				<img
					alt="album cover"
					src={albumCoverUrl}
					className="w-11 h-fit self-center pr-3.5"
				/>
				<div>
					<p className="text-sm font-semibold text-white">
						{songName}
					</p>
					<p>{artistName}</p>
				</div>
			</div>
			<p className="w-1/6"> {albumName} </p>
			<p className="w-1/6">date added</p>
			<div className="w-1/6"> {convertFromMsToSec(songDuration)} </div>
		</div>
	);
}
