import { SongContext } from "@/Contexts/SongContext";
import { useContext } from "react";

export function getSongInfo() {
	// returns 1 object(song) from an array of Obejct(songs) based on the song's ID
	const { radioSongs, currentSongId } = useContext(SongContext);

	//define variables so that the return statement doesn't give an error
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
