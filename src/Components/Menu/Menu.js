import { MenuItem } from "../MenuItem/MenuItem";
import { Logo } from "../Logo/Logo";

export function Menu() {
	return (
		<nav className="z-10 bg-slate-950 flex flex-col text-xl font-bold w-[20vw]">
			<Logo
				src="images/dark-theme/icon-dark-theme-logo.png"
				logoName="SpotifyLogo"
			/>
			<div className="flex flex-col gap-4 px-5">
				<MenuItem
					imgAlt="Home"
					imgSrc="images/dark-theme/icon-dark-theme-home.svg">
					Home
				</MenuItem>
				<MenuItem
					imgAlt="Search"
					imgSrc="images/dark-theme/icon-dark-theme-search.svg">
					Search
				</MenuItem>
			</div>
		</nav>
	);
}
