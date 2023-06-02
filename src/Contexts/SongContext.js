"use client";

import { createContext, useState } from "react";
import { playedSongsList } from "@/FakeData/playedSongsList";

export const SongContext = createContext();

const songName = playedSongsList[0].name;
const songArtistName = playedSongsList[0].artists[0].name;
const songAlbumCoverImg = playedSongsList[0].album.images[0].url;
const trackDuration = playedSongsList[0].duration_ms;
const songId = playedSongsList[0].id;

const radioSongs = playedSongsList.map((song) => ({
	songName: song.name,
	songArtistName: song.artists[0].name,
	songAlbumCoverImg: song.album.images[0].url,
	trackDuration: song.duration_ms,
	songId: song.id,
	isLiked: "false",
}));

const firstSongId = radioSongs[0].songId;

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
