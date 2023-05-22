import { PlaybackControls } from "../PlaybackControls/PlaybackControls";
import { SongControls } from "../SongControls/SongControls ";
import { SongDetails } from "../SongDetails/SongDetails";

export function MusicPlayerPanel({
	songName,
	songArtistName,
	songAlbumCoverImg,
	trackDuration,
}) {
	return (
		<div className="min-h-max bg-gray-900 flex justify-between">
			<SongDetails
				songName={songName}
				songArtistName={songArtistName}
				songAlbumCoverImg={songAlbumCoverImg}
			/>
			<PlaybackControls trackDuration={trackDuration} />
			<SongControls />
		</div>
	);
}
