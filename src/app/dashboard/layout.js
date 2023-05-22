"use client";

import { TopBar } from "@/Components/TopBar/TopBar";
import { Sidebar } from "@/Components/Sidebar/Sidebar";
import { MusicPlayerPanel } from "@/Components/MusicPlayerPanel/MusicPlayerPanel";
import { playedSongsList } from "@/FakeData/playedSongsList";

// destructurisation is possible, though likely harder to read

const songName = playedSongsList[0].name;
const songArtistName = playedSongsList[0].artists[0].name;
const songAlbumCoverImg = playedSongsList[0].album.name;
const trackDuration = playedSongsList[0].duration_ms;

export default function DashboardLayout({ children }) {
	return (
		<section className="grid grid-cols-[minmax(150px,_20vw)_1fr] w-screen h-screen">
			<Sidebar />
			{/* shared UI */}
			<div>
				<TopBar />
				{children}
				<MusicPlayerPanel
					songName={songName}
					songArtistName={songArtistName}
					songAlbumCoverImg={songAlbumCoverImg}
					trackDuration={trackDuration}
				/>
			</div>
		</section>
	);
}
