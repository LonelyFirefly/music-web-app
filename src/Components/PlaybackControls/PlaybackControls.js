import { useContext, useState } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { SpotifyPlayer } from "../SpotifyPlayer/SpotifyPlayer";
import { SongContext } from "@/Contexts/SongContext";

export function PlaybackControls() {
	const { isPlaying, setIsPlaying, trackDuration } = useContext(SongContext);
	const token = "YOUR_ACCESS_TOKEN";
	const uris = ["11dFghVXANMlKmJXsNCbNl", "11dFghVXANMlKmJXsNCbNl"];

	function handleClick() {
		setIsPlaying(!isPlaying);
	}

	return (
		<div className="flex flex-col justify-center items-center py-3">
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
					alt={isPlaying ? "stop-icon" : "play-icon"}
					src={
						isPlaying
							? "/images/dark-theme/icon-dark-theme-pause.svg"
							: "/images/dark-theme/icon-dark-theme-play.svg"
					}
					className="w-14 hover:cursor-pointer"
					onClick={handleClick}
				/>
				{/* <SpotifyPlayer
					token="BQDytZTA70r5OtRHtsGKEaym_QyCkHRdf3g-f7-UrCWP2KlTD9Y_b1L0cKPLsrL9lqqmg24mucQgv0n7eqWwX9ks17nNT1IvQ1j24tWdCvWPfUUlzybOb5CSRNCysijmMgAUTWdcWlYFN7P_VFQjhdb8nbAf6lDwdk8azkFsKPO-mxmXFktggn0MeOTZlD19S1dtK1gDPYovEcouFU-chovEbSX-"
					uris={uris}
				/> */}

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
			<ProgressBar
				trackDuration={trackDuration}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
		</div>
	);
}
