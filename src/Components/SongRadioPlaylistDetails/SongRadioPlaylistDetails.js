import { SongContext } from "@/Contexts/SongContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { LikeSong } from "../LikeSong/LikeSong";
import { LikeAlbum } from "../LikeAlbum/LikeAlbum";

const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

// https://open.spotify.com/artist/0qT79UgT5tY4yudH9VfsdT?si=4_8uiBr-S5aAKHy7JJWm7w

async function getAccessToken() {
	const formData = new URLSearchParams();
	formData.append("grant_type", "client_credentials");

	const res = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			Authorization:
				"Basic " +
				new Buffer.from(client_id + ":" + client_secret).toString(
					"base64"
				),
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: formData.toString(),
	});

	if (!res.ok) {
		// console.log(res);
		// throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	console.log("expires in " + data.expires_in);
	return data.access_token;
}

async function getArtist() {
	try {
		const accessToken = await getAccessToken();
		const res = await fetch(
			"https://api.spotify.com/v1/artists/0qT79UgT5tY4yudH9VfsdT ",
			{
				method: "GET",
				headers: {
					Authorization: "Bearer " + accessToken,
				},
			}
		);
		const data = await res.json();
		// console.log(data);
		if (data.error) {
			// console.log("data error");
			// console.log(data.error.message);
		} else {
			return data;
		}
	} catch (error) {
		// console.log("getArtist Error: " + error);
	}
}
export function SongRadioPlaylistDetails() {
	const { isPlaying, setIsPlaying, songName } = useContext(SongContext);
	const [artist, setArtist] = useState(null);
	const pathNameSongRadio = usePathname();
	const searchParamsImagePath = useSearchParams().get("image");
	console.log(
		`Pathname: ${pathNameSongRadio}; searchParamsImagePath: ${searchParamsImagePath}`
	);

	console.log(artist);

	useEffect(() => {
		const fetchArtist = async () => {
			const data = await getArtist();
			setArtist(data);
		};

		fetchArtist();
	}, []);
	function handlePlayClick() {
		setIsPlaying(!isPlaying);
	}

	let userName = "userName";
	let artists = [
		{
			name: "artist",
			id: 0,
		},
		{
			name: "artist",
			id: 1,
		},
	];

	return (
		<div className="flex flex-col gap-5 h-fit pt-28 pr-5 pb-5 pl-7 bg-gradient-to-r from-gray-900 to-gray-900-custom">
			<div className="flex gap-5">
				<img
					alt="album cover"
					src={searchParamsImagePath}
					className="h-[26vh] min-h-fit"
				/>
				<div className="flex flex-col gap-3">
					<p className="font-bold text-xs">Playlist</p>
					<p className="xl:text-7xl lg:text-5xl md:text-3xl text-xl font-black">
						{songName} Radio
					</p>
					<div className="text-gray-200 text-opacity-90 text-sm">
						<div>
							With{" "}
							{artists.map((artist, index) => {
								return <span key={index}> {artist.name} </span>;
							})}{" "}
							and more
						</div>
						<div className="flex items-center gap-1.5">
							<img
								alt="spotify logo"
								src="/images/default/icon-default-spotify-logo.svg"
							/>
							Made for{" "}
							<span className="font-bold text-xs text-white">
								{userName}
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex">
				<img
					onClick={handlePlayClick}
					className="hover:cursor-pointer"
					alt={isPlaying ? "Pause" : "Play"}
					src={`/images/default/icon-default-${
						isPlaying ? "pause" : "play"
					}.svg`}
				/>
				<LikeAlbum />
			</div>
		</div>
	);
}
