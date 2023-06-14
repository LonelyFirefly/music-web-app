import { useContext, useEffect, useState } from "react";
import { SongRadioPlaylistItem } from "../SongRadioPlaylistItem/SongRadioPlaylistItem";
import { SongContext } from "@/Contexts/SongContext";
import { getAccessToken } from "@/utils/getAccessToken";

async function getUserTopItems() {
	try {
		const accessToken = await getAccessToken();
		const res = await fetch("https://api.spotify.com/v1/me/top/tracks", {
			method: "GET",
			mode: "no-cors",
			headers: {
				Authorization: "Bearer " + accessToken,
				"Content-Type": "application/json",
				// Add the desired scopes to the headers
				"Spotify-Scope": "user-top-read", // Example scope: user-top-read
				Origin: "http://localhost:3000/",
			},
		});

		if (!res.ok) {
			throw new Error("Request failed with status: " + res.status);
		}

		const data = await res.json();
		console.log(data.message);
	} catch (error) {
		console.error("Error during the fetch call:", error.message);
	}
}

export function SongRadioPlaylistItems({ playedSongsList }) {
	const { radioSongs } = useContext(SongContext);
	const [userTopItems, setUserTopItems] = useState([]);

	// useEffect(() => {
	// 	const fetchUserTopItems = async () => {
	// 		const data = await getUserTopItems();
	// 		setUserTopItems(data);
	// 	};

	// 	fetchUserTopItems();
	// }, []);

	return (
		<div className="flex flex-col align-middle justify-between px-5 text-xs font-normal text-gray-400 bg-song-dark">
			<div className="flex px-5 pt-2.5 pb-1.5">
				<div className="flex w-1/2">
					<span className="self-center mr-3.5 w-4">#</span>
					<span>Title</span>
				</div>
				<span className="w-1/4">Album</span>
				<div className="w-1/4 pl-10">
					<img
						alt="duration icon"
						src="/images/dark-theme/icon-dark-theme-duration.svg"
						className="inline-block"
					/>
				</div>
			</div>
			{radioSongs.map((song, index) => (
				<SongRadioPlaylistItem song={song} key={song.id} />
			))}
		</div>
	);
}
