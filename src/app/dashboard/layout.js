"use client";

import React from "react";
import { TopBar } from "@/Components/TopBar/TopBar";
import { Sidebar } from "@/Components/Sidebar/Sidebar";
import { MusicPlayerPanel } from "@/Components/MusicPlayerPanel/MusicPlayerPanel";

import { SongContextProvider } from "@/Contexts/SongContext";

// destructurisation is possible, though likely harder to read

export default function DashboardLayout({ children }) {
	return (
		<SongContextProvider>
			<section className="flex">
				<Sidebar />
				{/* shared UI */}
				<div>
					<TopBar />
					{children}
					<MusicPlayerPanel />
				</div>
			</section>
		</SongContextProvider>
	);
}
