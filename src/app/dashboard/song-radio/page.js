import { SongRadioPlaylist } from "@/Components/SongRadioPlaylist/SongRadioPlaylist";
import { playedSongsList } from "@/FakeData/playedSongsList";

export default function Page() {
	return (
		<SongRadioPlaylist
			playedSongsList={playedSongsList}></SongRadioPlaylist>
	);
}
