import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { getSmallestImageFromAlbum } from "@/utils/getSmallestImageFromAlbum";

export function SongRadioPlaylistItem({ song, key, index }) {
	const albumImages = song.album.images;
	const albumCoverUrl = getSmallestImageFromAlbum(albumImages).url;
	const songName = song.name;
	const artistName = song.artists[0].name;
	const albumName = song.album.name;
	const songDuration = convertFromMsToSec(song.duration_ms);
	return (
		<div className="flex px-5 pt-2.5 pb-1.5">
			<div className="flex w-1/2">
				<p className="self-center pr-3.5"> {index} </p>
				<img
					alt="album cover"
					src={albumCoverUrl}
					className="w-11 h-fit self-center pr-3.5"
				/>
				<div>
					<p className="text-sm font-semibold text-white">
						{songName}
					</p>
					<p>{artistName}</p>
				</div>
			</div>
			<p className="w-1/6"> {albumName} </p>
			<p className="w-1/6">date added</p>
			<p className="w-1/6"> {convertFromMsToSec(songDuration)} </p>
		</div>
	);
	// return (
	// 	<tr key={song.id} className="mx-5 mt-2.5 mb-10">
	// 		<td>{index + 1}</td>
	// 		<td className="flex gap-4">
	// 			<img
	// 				alt="album cover"
	// 				src={albumCoverUrl}
	// 				className="w-9 h-fit self-center"
	// 			/>
	// 			<div>
	// 				<p className="text-sm font-semibold text-white">
	// 					{songName}
	// 				</p>
	// 				<p>{artistName}</p>
	// 			</div>
	// 		</td>
	// 		<td>{albumName}</td>
	// 		<td> date added </td>
	// 		<td>{songDuration}</td>
	// 	</tr>
	// );
}
