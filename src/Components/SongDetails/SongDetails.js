import { SongContext } from "@/Contexts/SongContext";
import { useContext } from "react";
import { LikeSong } from "../LikeSong/LikeSong";

export function SongDetails() {
	const { radioSongs, currentSongId } = useContext(SongContext);

	// take the current song's name, album cover and artist name
	const { songName, songAlbumCoverImg, songArtistName } = radioSongs.filter(
		(song) => song.songId === currentSongId
	)[0];

	return (
		<div className="flex gap-x-5 items-center">
			<img
				alt="song album cover"
				src={songAlbumCoverImg}
				className="w-12"
			/>
			<div className="flex flex-col self-center">
				<span className="font-bold text-base"> {songName} </span>
				<span className="text-xs"> {songArtistName} </span>
			</div>
			<LikeSong width={7} />
		</div>
	);
}
