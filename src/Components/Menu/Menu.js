export function Menu() {
	return (
		<nav className="z-10 bg-slate-950 w-1/7 min-w-min flex flex-col text-xs font-bold">
			<div>
				<img
					src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
					alt="logo"
					className="w-2/4 pt-5 pb-8 pl-5"
				/>
			</div>
			<div>
				<img
					alt="Home icon"
					src="icon-light-theme-home.png"
					className="w-5 inline-block"
				/>
				<a className="pl-6" href="#">
					Home
				</a>
			</div>
			<div>
				<img
					alt="Search icon"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnuB4qn5YW4MSCCO4c-ERzkrgVZRX7GQJldA&usqp=CAU"
					className="w-5 inline-block"
				/>
				<a className=" pl-6" href="#">
					Search
				</a>
			</div>
		</nav>
	);
}
