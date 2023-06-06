import { useState } from "react";

export function SongControls() {
	const [isMuted, setIsMuted] = useState(false);
	const muteIconSource = isMuted
		? "/images/dark-theme/icon-dark-theme-mute.svg"
		: "/images/dark-theme/icon-dark-theme-unmute.svg";

	const muteIconAltText = isMuted ? "icon-mute" : "icon-unmute";

	return (
		<div className="flex h-8 min-h-max w-fit items-center justify-self-end">
			<img
				alt="icon-lyrics"
				src="/images/dark-theme/icon-dark-theme-lyrics.svg"
			/>
			<img
				alt="icon-queue"
				src="/images/dark-theme/icon-dark-theme-queue.svg"
			/>
			<img src={muteIconSource} alt={muteIconAltText} />
			<input className="h-1.5 w-28" type="range" min="0" max="100" />
		</div>
	);
}
