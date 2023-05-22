import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export function SongSlider({ trackDuration, isPlaying, setIsPlaying }) {
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(trackDuration);

	useEffect(() => {
		let interval = null;
		if (isPlaying) {
			interval = setInterval(() => {
				setCurrentTime((prevTime) => prevTime + 1000);
			}, 1000);
		}
		return () => clearInterval(interval);
	}, [isPlaying]);

	const progress = ((currentTime / duration) * 100).toFixed(2);

	return (
		<div>
			<progress
				className={styles.progress}
				value={progress}
				max={duration}></progress>
			<div> {convertFromMsToSec(currentTime)} </div>
			<div> {convertFromMsToSec(duration)} </div>
			<button onClick={() => setIsPlaying(!isPlaying)}>
				{isPlaying ? "Pause" : "Play"}
			</button>
			<button onClick={() => setCurrentTime(0)}>Restart</button>
		</div>
	);

	return (
		<div>
			<span> CurrentSongTime </span>
			<div class="w-full h-1.5 bg-gray-400 rounded-full relative">
				<div className="absolute h-full bg-gray-700 rounded-full w-1/2"></div>
				<input
					type="range"
					className="w-full h-4 appearance-none bg-transparent z-10 cursor-pointer "
					min="0"
					max="100"
					step="1"
					value={playbackTime}
					onChange={(e) => {
						setPlaybackTime(e.target.value);
					}}
				/>
			</div>

			<span> TotalSongTime </span>
		</div>
	);
}
