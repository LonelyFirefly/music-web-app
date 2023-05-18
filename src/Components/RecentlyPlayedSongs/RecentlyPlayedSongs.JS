import { Song } from "../Song/Song";

export function RecentlyPlayedSongs({ recentlyPlayedSongsList }) {
	const recentlyPlayedSongs = recentlyPlayedSongsList.map(
		(recentlyPlayedSong) => (
			<li key={recentlyPlayedSong.id}> {recentlyPlayedSong} </li>
		)
	);
	return (
		<ul>
			<Song></Song>
			<Song></Song>
			<Song></Song>
		</ul>
	);
}
