import { SongContext } from "@/Contexts/SongContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";

export function SongRadioPlaylistDetails() {
	const { optionsVisible, setOptionsVisible } = useState(false);
	const { isPlaying, setIsPlaying, setIsLiked, isLiked, songName } =
		useContext(SongContext);
	const pathNameSongRadio = usePathname();
	const searchParamsImagePath = useSearchParams().get("image");
	console.log(
		`Pathname: ${pathNameSongRadio}; searchParamsImagePath: ${searchParamsImagePath}`
	);

	function handlePlayClick() {
		setIsPlaying(!isPlaying);
	}

	function handleLikeClick() {
		setIsLiked(!isLiked);
	}

	function handleOptionsClick() {
		setOptionsVisible(!optionsVisible);
	}

	let userName = "userName";
	let nothing = "nothing";
	let artists = [
		{
			name: "Fucker",
			id: 0,
		},
		{
			name: "Fucker",
			id: 1,
		},
	];

	return (
		<div className="flex flex-col gap-5 h-fit pt-28 pr-5 pb-5 pl-7 bg-gradient-to-r from-gray-900 to-gray-900-custom">
			<div className="flex gap-5">
				<img
					alt="album cover"
					src={searchParamsImagePath}
					className="h-[26vh] min-h-fit "
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

				<img
					onClick={handleLikeClick}
					className="w-12 hover:cursor-pointer mr-6"
					alt={isLiked ? "liked" : "like"}
					src={`/images/dark-theme/icon-dark-theme-${
						isLiked ? "liked" : "like"
					}.svg`}
				/>

				<img
					onClick={handleOptionsClick}
					alt="Options"
					src="/images/default/icon-default-options.svg"
				/>
			</div>
		</div>
	);
}
