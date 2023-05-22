import { useState } from "react";
import { SongSlider } from "../SongSlider/SongSlider";

export function PlaybackControls() {
	const [isPlayed, setIsPlayed] = useState(false);

	function handleClick() {
		setIsPlayed(!isPlayed);
	}

	return (
		<div className="flex flex-col justify-center align-middle py-3">
			<div className="flex justify-center align-middle">
				<img
					alt="shuffle-icon"
					src="/images/dark-theme/icon-dark-theme-shuffle.svg"
					className="w-10 pr-6"
				/>
				<img
					alt="previous-icon"
					src="/images/dark-theme/icon-dark-theme-previous.svg"
					className="w-8 pr-2"
				/>
				<img
					alt={isPlayed ? "stop-icon" : "play-icon"}
					src={
						isPlayed
							? "/images/dark-theme/icon-dark-theme-pause.svg"
							: "/images/dark-theme/icon-dark-theme-play.svg"
					}
					className="w-14 hover:cursor-pointer"
					onClick={handleClick}
				/>

				<img
					alt="next-icon"
					src="/images/dark-theme/icon-dark-theme-next.svg"
					className="w-8 pl-2"
				/>
				<img
					alt="repeat-icon"
					src="/images/dark-theme/icon-dark-theme-repeat.svg"
					className="w-10 pl-6"
				/>
			</div>
			<SongSlider />
		</div>
	);
}
