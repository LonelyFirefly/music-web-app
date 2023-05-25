import { SongRadioPlaylistItem } from "../SongRadioPlaylistItem/SongRadioPlaylistItem";

export function SongRadioPlaylistItems({ playedSongsList }) {
	// return (
	// 	<div className="bg-song-dark">
	// 		<ol>
	// 			{playedSongsList.map((song) => (
	// 				<SongRadioPlaylistItem song={song} key={song.id} />
	// 			))}
	// 		</ol>
	// 	</div>
	// );
	return (
		<table className="bg-song-dark ml-5 w-full">
			<thead>
				<tr className="text-left">
					<th>#</th>
					<th>Title</th>
					<th>Album</th>
					<th>Date Added</th>
					<th>
						<img
							alt="duration icon"
							src="/images/dark-theme/icon-dark-theme-duration.svg"
						/>
					</th>
				</tr>
			</thead>
			<tbody>
				{playedSongsList.map((song, index) => (
					<SongRadioPlaylistItem
						song={song}
						key={song.id}
						index={index}
					/>
				))}
			</tbody>
		</table>
	);
}
