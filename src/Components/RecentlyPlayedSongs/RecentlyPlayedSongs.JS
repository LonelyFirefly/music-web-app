import { Song } from "../Song/Song";

export function RecentlyPlayedSongs({ recentlyPlayedSongsList }) {
	const recentlyPlayedSongs = recentlyPlayedSongsList.map(
		(recentlyPlayedSong) => (
			<li key={recentlyPlayedSong.id}> {recentlyPlayedSong} </li>
		)
	);
	return (
		<div className="bg-custom-gradient grid grid-cols-4 gap-x-7 gap-y-9 px-10 pt-28 pb-10">
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
			<Song></Song>
		</div>
	);
}
