export function convertFromMsToSec(ms) {
	const milliseconds = ms;
	const seconds = milliseconds / 1000;
	const minutes = seconds / 60;

	const extraSeconds = parseFloat(seconds) % 60;

	return minutes.toFixed(0) + ":" + extraSeconds.toFixed(0);
}
