// import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";

import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";
import { SongRadioPlaylistDetails } from "../SongRadioPlaylistDetails/SongRadioPlaylistDetails";
import { useContext } from "react";
import { SongContext } from "@/Contexts/SongContext";

export function SongRadioPlaylist() {
	const { radioSongs } = useContext(SongContext);
	const onMountSongs = radioSongs.slice(0, 6);
	return (
		<div className="w-[80vw] flex flex-col">
			<SongRadioPlaylistDetails />
			<SongRadioPlaylistItems songs={onMountSongs} />
		</div>
	);
}
