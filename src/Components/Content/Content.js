import { RecentlyPlayedSongs } from "../RecentlyPlayedSongs/RecentlyPlayedSongs";
export function Content({ recentlyPlayedSongsList }) {
	return (
		<RecentlyPlayedSongs
			recentlyPlayedSongsList={
				recentlyPlayedSongsList
			}></RecentlyPlayedSongs>
	);
}
