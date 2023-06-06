import { useContext } from "react";
import { SongRadioPlaylistItem } from "../SongRadioPlaylistItem/SongRadioPlaylistItem";
import { SongContext } from "@/Contexts/SongContext";

export function SongRadioPlaylistItems({ playedSongsList }) {
	const { radioSongs } = useContext(SongContext);
	// console.log(radioSongs);

	return (
		<div className="flex flex-col align-middle justify-between px-5 text-xs font-normal text-gray-400 bg-song-dark">
			<div className="flex px-5 pt-2.5 pb-1.5">
				<div className="flex w-1/2">
					<span className="self-center mr-3.5 w-4">#</span>
					<span>Title</span>
				</div>
				<span className="w-1/4">Album</span>
				<div className="w-1/4 pl-10">
					<img
						alt="duration icon"
						src="/images/dark-theme/icon-dark-theme-duration.svg"
						className="inline-block"
					/>
				</div>
			</div>
			{radioSongs.map((song, index) => (
				<SongRadioPlaylistItem song={song} key={song.id} />
			))}
		</div>
	);
}
