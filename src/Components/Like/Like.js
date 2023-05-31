import { SongContext } from "@/Contexts/SongContext";
import { useContext } from "react";

export function Like({ width }) {
	const { setIsLiked, isLiked } = useContext(SongContext);

	function handleClick() {
		setIsLiked(!isLiked);
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
