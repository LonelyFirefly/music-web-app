import { getAccessToken } from "./getAccessToken";

export async function getArtist() {
	try {
		const accessToken = await getAccessToken();
		const res = await fetch(
			"https://api.spotify.com/v1/artists/0qT79UgT5tY4yudH9VfsdT ",
			{
				method: "GET",
				headers: {
					Authorization: "Bearer " + accessToken,
				},
			}
		);
		const data = await res.json();
		// console.log(data);
		if (data.error) {
			// console.log("data error");
			// console.log(data.error.message);
		} else {
			return data;
		}
	} catch (error) {
		// console.log("getArtist Error: " + error);
	}
}
