import { SongContext } from "@/Contexts/SongContext";
import { usePathname, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { LikeSong } from "../LikeSong/LikeSong";
import { LikeAlbum } from "../LikeAlbum/LikeAlbum";
import { getArtist } from "@/utils/getArtist";

// https://open.spotify.com/artist/0qT79UgT5tY4yudH9VfsdT?si=4_8uiBr-S5aAKHy7JJWm7w

export function SongRadioPlaylistDetails() {
	const { isPlaying, setIsPlaying, songName } = useContext(SongContext);
	const [artist, setArtist] = useState(null);
	const pathNameSongRadio = usePathname();
	const searchParamsImagePath = useSearchParams().get("image");
	console.log(
		`Pathname: ${pathNameSongRadio}; searchParamsImagePath: ${searchParamsImagePath}`
	);

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
