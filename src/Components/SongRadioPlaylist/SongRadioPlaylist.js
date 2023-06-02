// import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";

import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";
import { SongRadioPlaylistDetails } from "../SongRadioPlaylistDetails/SongRadioPlaylistDetails";

export function SongRadioPlaylist({ playedSongsList }) {
	return (
		<div className="w-[80vw] flex flex-col">
			<SongRadioPlaylistDetails />
			<SongRadioPlaylistItems playedSongsList={playedSongsList} />
		</div>
	);
}
