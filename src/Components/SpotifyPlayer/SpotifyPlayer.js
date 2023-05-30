import { useEffect } from "react";

export function SpotifyPlayer({ token, uris }) {
	useEffect(() => {
		const player = new SpotifyWebPlayer();

		player.on("ready", ({ device_id }) => {
			console.log("Player is ready", device_id);

			player.connect(token, (success) => {
				if (success) {
					console.log("Player is connected");
					player.play(uris, 0, 0);
				}
			});
		});

		return () => {
			player.disconnect();
		};
	}, [token, uris]);

	return <div>Spotify Player</div>;
}
