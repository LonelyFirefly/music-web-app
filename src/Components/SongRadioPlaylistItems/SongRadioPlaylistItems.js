import { SongRadioPlaylistItem } from "../SongRadioPlaylistItem/SongRadioPlaylistItem";

export function SongRadioPlaylistItems({ playedSongsList }) {
	return (
		<div className="flex flex-col lign-middle justify-between px-11 text-xs font-normal text-gray-400 bg-song-dark">
			<div className="flex px-5 pt-2.5 pb-1.5">
				<div className="flex w-1/2">
					<span className="self-center pr-3.5">#</span>
					<span>Title</span>
				</div>
				<span className="w-1/6">Album</span>
				<span className="w-1/6">Date Added</span>
				<div className="w-1/6">
					<img
						alt="duration icon"
						src="/images/dark-theme/icon-dark-theme-duration.svg"
						className="inline-block"
					/>
				</div>
			</div>
			{playedSongsList.map((song, index) => (
				<SongRadioPlaylistItem
					song={song}
					key={song.id}
					index={index + 1}
				/>
			))}
		</div>
	);
	// return (
	// 	<table className="bg-song-dark w-full ">
	// 		<thead>
	// 			<tr className="text-left">
	// 				<th>#</th>
	// 				<th>Title</th>
	// 				<th>Album</th>
	// 				<th>Date Added</th>
	// 				<th>
	// 					<img
	// 						alt="duration icon"
	// 						src="/images/dark-theme/icon-dark-theme-duration.svg"
	// 					/>
	// 				</th>
	// 			</tr>
	// 		</thead>
	// 		<tbody>
	// 			{playedSongsList.map((song, index) => (
	// 				<SongRadioPlaylistItem
	// 					song={song}
	// 					key={song.id}
	// 					index={index}
	// 				/>
	// 			))}
	// 		</tbody>
	// 	</table>
	// );
}
