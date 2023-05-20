export function SongDetails({ songName, songArtistName, songAlbumCoverImg }) {
	songArtistName = "somebody";
	songName = "some";
	return (
		<div className="flex gap-x-5">
			<img alt="song album cover" />
			<div className="flex flex-col">
				<span className="font-bold text-xl"> {songName} </span>
				<span className="text-base"> {songArtistName} </span>
			</div>
		</div>
	);
}
