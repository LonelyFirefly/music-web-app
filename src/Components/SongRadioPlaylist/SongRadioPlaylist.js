// import { SongRadioPlaylistItems } from "../SongRadioPlaylistItems/SongRadioPlaylistItems";

import { convertFromMsToSec } from "@/utils/convertFromMsToSec";

export function SongRadioPlaylist({ playedSongsList }) {
	const songRadioPlaylistItems = playedSongsList.map(
		(SongRadioPlaylistItem) => (
			<div>
				<ul>
					<li key={SongRadioPlaylistItem.id}>
						<img
							src={SongRadioPlaylistItem.album.images[2].url}
							alt="cover art for the album"
						/>
						{SongRadioPlaylistItem.name}
						{SongRadioPlaylistItem.artists[0].name}
						{SongRadioPlaylistItem.album.name}
						{convertFromMsToSec(SongRadioPlaylistItem.duration_ms)}
					</li>
				</ul>
			</div>
		)
	);

	return <ul> {songRadioPlaylistItems} </ul>;
}
