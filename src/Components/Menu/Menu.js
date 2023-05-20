import { MenuItem } from "../MenuItem/MenuItem";
import { Logo } from "../Logo/Logo";

export function Menu() {
	return (
		<nav className="z-10 bg-slate-950 w-1/7 min-w-min flex flex-col text-xl font-bold">
			<Logo
				src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
				logoName="SpotifyLogo"
			/>
			<div className="flex flex-col gap-4 px-5">
				<MenuItem imgAlt="Home" src="icon-dark-theme-home.png">
					Home
				</MenuItem>
				<MenuItem imgAlt="Search" src="icon-dark-theme-search">
					Search
				</MenuItem>
			</div>
		</nav>
	);
}
