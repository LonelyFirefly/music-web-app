import { SongRadioPlaylistItem } from "../SongRadioPlaylistItem/SongRadioPlaylistItem";

export function SongRadioPlaylistItems({ playedSongsList }) {
	return (
		<div className="bg-song-dark">
			<ol>
				{playedSongsList.map((song) => (
					<SongRadioPlaylistItem song={song} key={song.id} />
				))}
			</ol>
		</div>
	);
}
