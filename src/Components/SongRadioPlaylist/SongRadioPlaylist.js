// import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";

import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";
import { SongRadioPlaylistDetails } from "../SongRadioPlaylistDetails/SongRadioPlaylistDetails";

export function SongRadioPlaylist({ playedSongsList }) {
	return (
		<div className="w-[80vw] flex">
			<SongRadioPlaylistDetails />

			<SongRadioPlaylistItems playedSongsList={playedSongsList} />
		</div>
	);
}
