import { PlaybackControls } from "../PlaybackControls/PlaybackControls";
import { SongControls } from "../SongControls/SongControls";
import { SongDetails } from "../SongDetails/SongDetails";

export function MusicPlayerPanel({}) {
	return (
		<div className="min-h-max bg-gray-900 grid grid-cols-3 items-center fixed bottom-0 left-0 right-0 w-screen z-10 px-4">
			<SongDetails />
			<PlaybackControls />
			<SongControls />
		</div>
	);
}
