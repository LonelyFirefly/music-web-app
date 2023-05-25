import { convertFromMsToSec } from "@/utils/convertFromMsToSec";
import { getSmallestImageFromAlbum } from "@/utils/getSmallestImageFromAlbum";

export function SongRadioPlaylistItem({ song, key, index }) {
	const albumImages = song.album.images;
	const albumCoverUrl = getSmallestImageFromAlbum(albumImages).url;
	const songName = song.name;
	const artistName = song.artists[0].name;
	const albumName = song.album.name;
	const songDuration = convertFromMsToSec(song.duration_ms);
	// return (
	// 	<li>
	// 		<div className="grid grid-cols-6 pt-2.5 px-5 pb-1.5 align-middle text-xs font-normal text-gray-400">
	// 			<div className="col-span-3 flex gap-3.5">
	// 				<img
	// 					alt="album cover"
	// 					src={albumCoverUrl}
	// 					className="w-9 h-fit self-center"
	// 				/>
	// 				<div>
	// 					<p className="text-sm font-semibold text-white">
	// 						{songName}
	// 					</p>
	// 					<p>{artistName}</p>
	// 				</div>
	// 			</div>
	// 			<p> {albumName} </p>
	// 			<p>date added</p>
	// 			<p> {convertFromMsToSec(songDuration)} </p>
	// 		</div>
	// 	</li>
	// );
	return (
		<tr key={song.id}>
			<td>{index + 1}</td>
			<td className="flex gap-4">
				<img
					alt="album cover"
					src={albumCoverUrl}
					className="w-9 h-fit self-center"
				/>
				<div>
					<p className="text-sm font-semibold text-white">
						{songName}
					</p>
					<p>{artistName}</p>
				</div>
			</td>
			<td>{albumName}</td>
			<td> date added </td>
			<td>{songDuration}</td>
		</tr>
	);
}
