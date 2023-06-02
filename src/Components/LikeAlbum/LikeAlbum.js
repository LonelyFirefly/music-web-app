import { SongContext } from "@/Contexts/SongContext";
import { useContext, useState } from "react";

export function LikeAlbum() {
	// there should me a fetch query to Spotify lo learn whether the album is liked
	const [isLiked, setIsLiked] = useState(false);
	const {
		currentSongId,
		setCurrentSongId,
		likedSongs,
		setLikedSongs,
		radioSongs,
	} = useContext(SongContext);

	function handleClick() {
		setIsLiked(!isLiked);
	}

	return (
		<img
			onClick={handleClick}
			className={`w-9 hover:cursor-pointer mr-6`}
			alt={isLiked ? "liked" : "like"}
			src={`/images/dark-theme/icon-dark-theme-${
				isLiked ? "liked" : "like"
			}.svg`}
		/>
	);
}
