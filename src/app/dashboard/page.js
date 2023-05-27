import { RecentlyPlayedSongs } from "../../Components/RecentlyPlayedSongs/RecentlyPlayedSongs";
import { playedSongsList } from "@/FakeData/playedSongsList";

export default function Page() {
	return (
		<RecentlyPlayedSongs
			recentlyPlayedSongsList={playedSongsList}></RecentlyPlayedSongs>
	);
}
