// import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";

import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";

export function SongRadioPlaylist({ playedSongsList }) {
	return (
		<div className="w-[80vw]">
			<div className="bg-slate-3	00 mt-80">layout on the top</div>
			<SongRadioPlaylistItems playedSongsList={playedSongsList} />
		</div>
	);
}
