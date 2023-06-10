import { SongContext } from "@/Contexts/SongContext";
import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { getSmallestImageFromAlbum } from "@/utils/getSmallestImageFromAlbum";
import { useContext, useState } from "react";
import { LikeSong } from "../LikeSong/LikeSong";
import { getSongInfo } from "@/utils/getSongInfo";

export function SongRadioPlaylistItem({ song }) {
	const { currentSongId, setCurrentSongId, isPlaying, setIsPlaying } =
		useContext(SongContext);
	// console.log(song);

	function handleClick() {
		setCurrentSongId(song.songId);
		setIsPlaying(!isPlaying);
	}

	const {
		songAlbumCoverImg,
		songName,
		songArtistName,
		songAlbumName,
		trackDuration,
	} = song;

	return (
		<div className="flex px-5 pt-2.5 pb-1.5 items-center">
			<div className="flex w-1/2 items-center">
				<div className=" mr-3.5 w-4">
					<div
						className=" w-8 cursor-pointer pr-5"
						onClick={handleClick}>
						{isPlaying & (song.songId === currentSongId) ? (
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
					src={songAlbumCoverImg}
					className="w-11 h-fit self-center pr-3.5"
				/>
				<div>
					<p className="text-sm font-semibold text-white">
						{songName}
					</p>
					<p>{songArtistName}</p>
				</div>
			</div>
			<p className="w-1/4 truncate mr-6"> {songAlbumName} </p>
			<div className="w-1/4 flex items-center">
				<LikeSong width={4} songId={song.songId} />
				{convertFromMsToSec(trackDuration)}
			</div>
		</div>
	);
}
