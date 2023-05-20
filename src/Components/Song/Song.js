import { playedSongsList } from "@/FakeData/playedSongsList";

export function Song() {
	let songName = playedSongsList[0].name;
	let artistName = playedSongsList[0].artists[0].name;
	let albumImage = playedSongsList[0].album.images[2].url;

	return (
		<div className="w-full flex flex-col gap-y-4 text-sm bg-song-dark rounded-lg">
			<img
				alt="songImg"
				className="w-9/12 flex self-center p-3 pb-4"
				src={albumImage}
			/>
			<div className="grid grid-cols-1 justify-items-center gap-y-3">
				<span className="text-xl font-medium"> {songName} </span>
				<span> {artistName} </span>
			</div>
			<button className="self-center"> Go to Song Radio </button>
		</div>
	);
}
