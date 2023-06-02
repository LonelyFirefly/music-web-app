import { SongContext } from "@/Contexts/SongContext";
import { useContext } from "react";

export function getSongInfo() {
	// returns the info as an object from a radio Songs array
	const { radioSongs, currentSongId } = useContext(SongContext);

	let songName,
		songAlbumCoverImg,
		songArtistName,
		trackDuration,
		songId,
		isLiked;

	return ({
		songName,
		songAlbumCoverImg,
		songArtistName,
		trackDuration,
		songId,
		isLiked,
	} = radioSongs.filter((song) => song.songId === currentSongId)[0]);
}
