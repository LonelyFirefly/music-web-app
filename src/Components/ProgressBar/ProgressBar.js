import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { SongContext } from "@/Contexts/SongContext";

export function ProgressBar({ isPlaying, setIsPlaying }) {
	const [currentTime, setCurrentTime] = useState(0);
	const { radioSongs, currentSongId } = useContext(SongContext);

	const duration = radioSongs.find(
		(song) => song.songId === currentSongId
	).trackDuration;
	// console.log(duration);

	// const duration = trackDuration;
	const progress = ((currentTime / duration) * 100).toFixed(2);
	const durationInSeconds = Math.floor(duration / 1000);
	const minutes = Math.floor(durationInSeconds / 60);
	const seconds = durationInSeconds % 60;
	const formattedDuration = `${minutes}:${
		seconds < 10 ? "0" : ""
	}${Math.floor(seconds)}`;

	useEffect(() => {
		let interval = null;
		if (isPlaying) {
			interval = setInterval(() => {
				setCurrentTime((prevTime) => prevTime + 1000);
			}, 1000);
		}

		return () => clearInterval(interval);
	}, [isPlaying, progress]);

	return (
		<div className="progressBar relative flex flex-row justify-between items-center w-full appearance-none">
			<span className="">{convertFromMsToSec(currentTime)}</span>
			<progress
				className={styles.progress}
				value={currentTime}
				max={durationInSeconds}></progress>
			<span> {formattedDuration} </span>
		</div>
	);
}
