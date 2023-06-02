import { SongContext } from "@/Contexts/SongContext";
import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { getSmallestImageFromAlbum } from "@/utils/getSmallestImageFromAlbum";
import { useContext, useState } from "react";
import { LikeSong } from "../LikeSong/LikeSong";

export function SongRadioPlaylistItem({ song, index }) {
	const { currentSongId, setCurrentSongId, isPlaying, setIsPlaying } =
		useContext(SongContext);

	function handleClick() {
		setCurrentSongId(song.id);
		setIsPlaying(!isPlaying);
	}

	const albumImages = song.album.images;
	const albumCoverUrl = getSmallestImageFromAlbum(albumImages).url;
	const songName = song.name;
	const artistName = song.artists[0].name;
	const albumName = song.album.name;
	const songDuration = convertFromMsToSec(song.duration_ms);
	return (
		<div className="flex px-5 pt-2.5 pb-1.5">
			<div className="flex w-1/2">
				<div className="self-center mr-3.5 w-4">
					<div
						className=" w-8 cursor-pointer pr-5"
						onClick={handleClick}>
						{isPlaying & (song.id === currentSongId) ? (
							<img
								alt="pause-arrow"
								src="/images/dark-theme/icon-dark-theme-pause-arrow.svg"
							/>
						) : (
							<img
								alt="play-arrow"
								src="/images/dark-theme/icon-dark-theme-play-arrow.svg"
							/>
						)}
					</div>
					{/* <span className="hover:hidden">{index}</span> */}
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
			<p className="w-1/4"> {albumName} </p>
			<div className="w-1/4 flex">
				<LikeSong width={4} songId={song.id} />
				{convertFromMsToSec(songDuration)}
			</div>
		</div>
	);
}
