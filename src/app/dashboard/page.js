"use client";

import React from "react";
import { RecentlyPlayedSongs } from "@/Components/RecentlyPlayedSongs/RecentlyPlayedSongs.js";
import { playedSongsList } from "@/FakeData/playedSongsList";

export default function Page() {
	return <RecentlyPlayedSongs recentlyPlayedSongsList={playedSongsList} />;
}
