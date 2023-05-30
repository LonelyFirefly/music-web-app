"use client";

import { createContext, useState } from "react";
import { playedSongsList } from "@/FakeData/playedSongsList";

export const SongContext = createContext();

const songName = playedSongsList[0].name;
const songArtistName = playedSongsList[0].artists[0].name;
const songAlbumCoverImg = playedSongsList[0].album.name;
const trackDuration = playedSongsList[0].duration_ms;

export const SongContextProvider = ({ children }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLiked, setIsLiked] = useState(false);

	return (
		<SongContext.Provider
			value={{
				isPlaying,
				setIsPlaying,
				isLiked,
				songName,
				songArtistName,
				songAlbumCoverImg,
				trackDuration,
			}}>
			{children}
		</SongContext.Provider>
	);
};
