const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;

export async function getAccessToken() {
	const formData = new URLSearchParams();
	formData.append("grant_type", "client_credentials");

	const res = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			Authorization:
				"Basic " +
				new Buffer.from(client_id + ":" + client_secret).toString(
					"base64"
				),
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: formData.toString(),
	});

	if (!res.ok) {
		// console.log(res);
		// throw new Error("Failed to fetch data");
	}

	const data = await res.json();
	console.log("expires in " + data.expires_in);
	return data.access_token;
}
