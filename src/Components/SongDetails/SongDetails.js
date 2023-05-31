import { SongContext } from "@/Contexts/SongContext";
import { useContext } from "react";
import { Like } from "../Like/Like";

export function SongDetails() {
	const { songName, songArtistName, songAlbumCoverImg } =
		useContext(SongContext);
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
			<Like width={7} />
		</div>
	);
}
