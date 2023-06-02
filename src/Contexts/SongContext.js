"use client";

import { createContext, useState } from "react";
import { playedSongsList } from "@/FakeData/playedSongsList";

export const SongContext = createContext();

const radioSongs = playedSongsList.map((song) => ({
	songName: song.name,
	songArtistName: song.artists[0].name,
	songAlbumCoverImg: song.album.images[0].url,
	trackDuration: song.duration_ms,
	songId: song.id,
	isLiked: "false",
}));

console.log("RadioSongs Array");
console.log(radioSongs);

const firstSongId = radioSongs[1].songId;

export const SongContextProvider = ({ children }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	// const [isLiked, setIsLiked] = useState(false);
	const [currentSongId, setCurrentSongId] = useState(firstSongId);
	const [likedSongs, setLikedSongs] = useState([]);
	console.log(likedSongs);

	return (
		<SongContext.Provider
			value={{
				isPlaying,
				setIsPlaying,
				// isLiked,
				// setIsLiked,
				likedSongs,
				setLikedSongs,
				currentSongId,
				setCurrentSongId,
				radioSongs,
				// songName,
				// songArtistName,
				// songAlbumCoverImg,
				// trackDuration,
			}}>
			{children}
		</SongContext.Provider>
	);
};
