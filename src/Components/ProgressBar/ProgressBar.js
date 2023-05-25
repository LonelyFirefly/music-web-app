import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export function ProgressBar({ trackDuration, isPlaying, setIsPlaying }) {
	const [currentTime, setCurrentTime] = useState(0);
	const duration = trackDuration;
	const progress = ((currentTime / duration) * 100).toFixed(2);

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
				max={duration}></progress>
			<span> {convertFromMsToSec(duration)} </span>
		</div>
	);
}
