import { SongContext } from "@/Contexts/SongContext";
import { useContext } from "react";

export function getSongInfo() {
	// returns 1 object(song) from an array of Obejct(songs) based on the song's ID
	const { radioSongs, currentSongId } = useContext(SongContext);

	// console.log(typeof radioSongs);

	const {
		songName,
		songAlbumCoverImg,
		songArtistName,
		trackDuration,
		songId,
		isLiked,
	} = radioSongs.find((song) => song.songId === currentSongId);

	// console.log(songName);

	const currentSong = {
		songName: songName,
		songAlbumCoverImg: songAlbumCoverImg,
		songArtistName: songArtistName,
		trackDuration: trackDuration,
		songId: songId,
		isLiked: isLiked,
	};

	return currentSong;
}
