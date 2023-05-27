import { RecentlyPlayedSongs } from "@/src/Components/RecentlyPlayedSongs/RecentlyPlayedSongs.js";
import { playedSongsList } from "@/FakeData/playedSongsList";

export default function Page() {
	return (
		<RecentlyPlayedSongs
			recentlyPlayedSongsList={playedSongsList}></RecentlyPlayedSongs>
	);
}
