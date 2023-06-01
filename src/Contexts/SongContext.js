"use client";

import { createContext, useState } from "react";
import { playedSongsList } from "@/FakeData/playedSongsList";

export const SongContext = createContext();

const songName = playedSongsList[0].name;
const songArtistName = playedSongsList[0].artists[0].name;
const songAlbumCoverImg = playedSongsList[0].album.images[0].url;
const trackDuration = playedSongsList[0].duration_ms;

export const SongContextProvider = ({ children }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	// const [isLiked, setIsLiked] = useState(false);
	const [currentSong, setCurrentSong] = useState(null);
	const [likedSongs, setLikedSongs] = useState([]);

	return (
		<SongContext.Provider
			value={{
				isPlaying,
				setIsPlaying,
				// isLiked,
				// setIsLiked,
				likedSongs,
				setLikedSongs,
				currentSong,
				setCurrentSong,
				songName,
				songArtistName,
				songAlbumCoverImg,
				trackDuration,
			}}>
			{children}
		</SongContext.Provider>
	);
};
