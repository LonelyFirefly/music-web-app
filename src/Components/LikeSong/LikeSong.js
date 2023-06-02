import { SongContext } from "@/Contexts/SongContext";
import { useContext } from "react";

export function LikeSong({ width, songId }) {
	const {
		currentSongId,
		setCurrentSongId,
		likedSongs,
		setLikedSongs,
		radioSongs,
	} = useContext(SongContext);

	let isLiked = likedSongs.includes(songId);

	function handleClick() {
		setLikedSongs((prevLikedSongs) => {
			if (prevLikedSongs.includes(songId)) {
				isLiked = true;
				return prevLikedSongs.filter((id) => id !== songId);
			} else {
				isLiked = false;
				return [...prevLikedSongs, songId];
			}
		});
	}

	return (
		<img
			onClick={handleClick}
			className={`w-${width} hover:cursor-pointer mr-6`}
			alt={isLiked ? "liked" : "like"}
			src={`/images/dark-theme/icon-dark-theme-${
				isLiked ? "liked" : "like"
			}.svg`}
		/>
	);
}
