import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Spotify web app",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		// as a root layout, it should contain html and body tags
		<html lang="en">
			<Head>
				<title>Spotiy Music Web App</title>
				<meta
					name="viewport"
					content="initial-scale=1, width=device-width"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/icon?family=Material+Icons"
				/>
			</Head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
