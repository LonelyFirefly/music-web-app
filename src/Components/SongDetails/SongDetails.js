import { SongContext } from "@/Contexts/SongContext";
import { useContext } from "react";
import { LikeSong } from "../LikeSong/LikeSong";
import { getSongInfo } from "@/utils/getSongInfo";

export function SongDetails() {
	const { currentSongId } = useContext(SongContext);

	const { songName, songAlbumCoverImg, songArtistName } = getSongInfo();

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
			<LikeSong width={7} songId={currentSongId} />
		</div>
	);
}
