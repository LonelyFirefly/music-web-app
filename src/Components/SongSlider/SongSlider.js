import { useState } from "react";

export function SongSlider() {
	const [playbackTime, setPlaybackTime] = useState(0);
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
