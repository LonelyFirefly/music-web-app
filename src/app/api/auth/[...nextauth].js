import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyAPI, { LOGIN_URL } from "../../../../lib/spotify";

async function refreshAccessToken(token) {
	try {
		spotifyAPI.setAccessToken(token.accessToken);
		spotifyAPI.setRefreshToken(token.refreshToken);

		const { body: refreshedToken } = await spotifyAPI.refreshAccessToken();
		console.log("REFRESHED TOKEN IS", refreshedToken);

		return {
			...token,
			accessToken: refreshedToken.access_token,
			accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000, // = 1 hour as 3600 returns from Spotify API
			refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
		};
	} catch (error) {
		console.error(error);
		return {
			...token,
			error: "RefreshAccessTokenError",
		};
	}
}

export default NextAuth({
	// Configure one o r more authentication providers
	providers: [
		SpotifyProvider({
			clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
			clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
			authorization: LOGIN_URL,
		}),
		// ...add more providers here
	],
	secret: process.env.JWT_SECRET,
	pages: {
		singin: "/login",
	},
	callbacks: {
		async jwt({ token, account, user }) {
			// initial sign in
			if (account && user) {
				return {
					...token,
					accessToken: account.access_token,
					refreshToken: account.refresh_token,
					username: account.providerAccount,
					accessTokenExpires: account.expires_at * 1000, // we are handling expiry times in Milliseconds hence * 1000
				};
			}

			// return previous token if the acces token hasn't expired yet
			if (Date.now() < token.accessTokenExpires) {
				console.log("EXISTING ACCES TOKEN IS VALID");
				return token;
			}

			// Acces token has expired, so we need to refresh token
			console.log(" ACCES TOKEN HAS EXPIRED, REFRESHING...");
			return await refreshAccessToken(token);
		},

		async session({ session, token }) {
			session.user.accessToken = token.accessToken;
			session.user.refreshToken = token.refreshToken;
			session.user.username = token.username;

			return session;
		},
	},
});
