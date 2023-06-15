"use client";

import { validateEmail } from "@/utils/validateEmail";
import { validatePassword } from "@/utils/validatePassword";
import { validateTel } from "@/utils/validateTel";
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
import { useRef, useState } from "react";

export default function Page() {
	const [emailError, setEmailError] = useState(false);
	const [telError, setTelError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [emailInput, setEmailInput] = useState("");
	const formRef = useRef(null);

	const isDisabled = !emailInput;

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
			tel: data.get("tel"),
		});
		// Reset form after submission
		formRef.current.reset();
		setEmailError(false);
		setTelError(false);
		setPasswordError(false);
	};

	const handlePasswordChange = (e) => {
		const password = e.target.value;
		setEmailInput(password);
		const isValidPassword = validatePassword(password);
		setPasswordError(!isValidPassword);
	};

	const handleEmailChange = (e) => {
		const isValid = validateEmail(e.target.value);
		setEmailError(!isValid);
	};

	const handleTelChange = (e) => {
		const isValid = validateTel(e.target.value);
		setTelError(!isValid);
	};

	return (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					boxShadow: 3,
					borderRadius: 2,
					px: 4,
					py: 6,
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
					ref={formRef}
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
						error={emailError}
						helperText={
							emailError
								? "Please enter a valid email address"
								: null
						}
						onChange={handleEmailChange}
					/>
					<Typography variant="body1" align="center"></Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						id="tel"
						label="Mobile number"
						name="tel"
						autoComplete="tel"
						pattern="\+\d+"
						error={telError}
						helperText={
							telError
								? "Please enter a valid telephone number"
								: null
						}
						onChange={handleTelChange}
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
						error={passwordError}
						helperText={
							passwordError
								? "Password should be between 8-20 characters, contain at least 1 number, 1 symbol, and 1 capital letter"
								: null
						}
						onChange={handlePasswordChange}
					/>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						disabled={
							emailError ||
							telError ||
							passwordError ||
							isDisabled
						}
						type="submit"
						fullWidth
						color="tertiary"
						variant="filled"
						sx={{ mt: 3, mb: 2 }}>
						<span>Sign In</span>
					</Button>
					<Grid
						container
						spacing={2}
						direction="column"
						justifyContent="center"
						alignItems="center">
						<Grid item>
							<Link href="#" variant="body2">
								Forgot Password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								Don't have an account? Sign up
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
