import { SongContext } from "@/Contexts/SongContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";
import { LikeSong } from "../LikeSong/LikeSong";
import { LikeAlbum } from "../LikeAlbum/LikeAlbum";

// https://open.spotify.com/artist/0qT79UgT5tY4yudH9VfsdT?si=BbVUo51qSIuMayWBmPBGBg

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

async function getAccessToken() {
	const res = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "client_credentials",
			client_id: client_id,
			client_secret: client_secret,
		}),
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	console.log(`access token is ${data.expires_in}`);
	return data.access_token;
}

async function getArtist() {
	const accessToken = await getAccessToken();
	const res = await fetch(
		"https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
		{
			method: "GET",
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		}
	)
		.then((response) => response.json())
		.then((data) => {
			try {
				if (data.error) {
					console.log("ERROR !!!");
					console.log(data.error.message);
				}
				s;
				// Handle the response data here
				console.log("Not Erorr");
				s;
				console.log(data);
			} catch (error) {
				console.log("Error in data");
				console.log(error);
			}
		})
		.catch((error) => {
			// Handle any errors here
			console.log("Error");
			console.error(error);
		});
	return res;
}

export function SongRadioPlaylistDetails() {
	const { isPlaying, setIsPlaying, songName } = useContext(SongContext);
	const pathNameSongRadio = usePathname();
	const searchParamsImagePath = useSearchParams().get("image");
	console.log(
		`Pathname: ${pathNameSongRadio}; searchParamsImagePath: ${searchParamsImagePath}`
	);
	const artist = getArtist();
	console.log("Artist:");
	console.log(artist);

	function handlePlayClick() {
		setIsPlaying(!isPlaying);
	}

	let userName = "userName";
	let nothing = "nothing";
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
