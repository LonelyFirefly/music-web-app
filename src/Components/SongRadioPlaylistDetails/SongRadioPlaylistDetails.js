import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SongRadioPlaylistDetails() {
	const pathNameSongRadio = usePathname();
	const searchParamsImagePath = useSearchParams().get("image");
	console.log(
		`Pathname: ${pathNameSongRadio}; searchParamsImagePath: ${searchParamsImagePath}`
	);

	return (
		<div className="h-64 pt-20 bg-gradient-to-r from-gray-900 via-gray-900 to-gray-800">
			<img alt="album cover" src={searchParamsImagePath} />
			<div>fasdfsdfds</div>
		</div>
	);
}
