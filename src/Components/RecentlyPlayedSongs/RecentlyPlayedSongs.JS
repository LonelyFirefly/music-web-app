import { Song } from "../Song/Song";

export function RecentlyPlayedSongs({ recentlyPlayedSongsList }) {
	const recentlyPlayedSongs = recentlyPlayedSongsList.map(
		(recentlyPlayedSong) => (
			<li key={recentlyPlayedSong.id}> {recentlyPlayedSong} </li>
		)
	);
	return (
		<div className="w-[80vw] bg-custom-gradient grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-7 gap-y-9 px-10 pt-28 pb-10">
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
