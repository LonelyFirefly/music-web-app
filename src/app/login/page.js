"use client";

import {
	Box,
	Checkbox,
	Container,
	FormControlLabel,
	Link,
	Grid,
	TextField,
	Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
// import { getProviders, signIn } from "next-auth/react";

export default function Page({ providers }) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					color: "black",
				}}>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						id="password"
						label="Password"
						type="password"
						name="password"
						autoComplete="current-password"
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot Password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{" Don't have an account? Sign up"}
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>

			{/* {Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button> test </button>
				</div>
			))} */}
		</Container>
	);
}

{
	/* <img
				alt="spotify logo"
				className="w-52 mb-5"
				src="https://links.papareact.com/9xl"
			/> */
}

// before the page gets delivred, this function will run on the server. It's called a server-side render
// export async function getServerSideProps() {
// 	const providers = await getProviders();
// 	console.log(providers);

// 	return {
// 		props: {
// 			providers,
// 		},
// 	};
// }
