"use client";

import { spotifyButtonTheme } from "@/utils/spotifyButtonTheme";
import { validateEmail } from "@/utils/validateEmail";
import { validateUsername } from "@/utils/validateUsername";
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
	ThemeProvider,
	Stack,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";

export default function Page() {
	const [emailError, setEmailError] = useState(false);
	const [telError, setTelError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [usernameError, setUsernameError] = useState(false);
	const [selectedCheckboxValue, setSelectedCheckboxValue] = useState("");
	const [emailInput, setEmailInput] = useState("");
	const [dateError, setDateError] = useState(false);
	const formRef = useRef(null);

	const isDisabled =
		!emailInput ||
		emailError ||
		telError ||
		passwordError ||
		usernameError ||
		!selectedCheckboxValue ||
		dateError;

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
			tel: data.get("tel"),
			name: data.get("name"),
			birthDate: data.get("date"),
			gender: data.get(selectedCheckboxValue),
		});
		// Reset form after submission
		formRef.current.reset();
		setEmailError(false);
		setTelError(false);
		setPasswordError(false);
		setSelectedCheckboxValue(null);
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

	const handleNameChange = (e) => {
		const isValid = validateUsername(e.target.value);
		setUsernameError(!isValid);
	};

	const handleCheckboxChange = (e) => {
		const value = e.target.value;
		setSelectedCheckboxValue(
			selectedCheckboxValue === value ? null : value
		);
	};

	const handleDateChange = (e) => {
		const inputDate = e.target.value;
		if (inputDate === "") {
			setDateError(true);
		} else {
			setDateError(false);
		}
	};

	return (
		<Container component="main" maxWidth="xs" color="white">
			<Box
				sx={{
					px: 4,
					py: 6,
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
					color: "black",
				}}>
				<Typography component="h1" variant="h5">
					Sign up with your email adress
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					ref={formRef}
					sx={{ mt: 1 }}>
					<Typography variant="body1" align="start">
						What's your email?
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Enter your email"
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
					<Typography variant="body1" align="start">
						Enter your phome number
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						id="tel"
						label="Mobile number"
						defaultValue="+"
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
					<Typography variant="body1" align="start">
						Create a password
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						id="password"
						label="Create a password"
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
					<Typography variant="body1" align="start">
						What should we call you?
					</Typography>
					<TextField
						margin="normal"
						required
						fullWidth
						id="name"
						label="Enter a profile name"
						type="name"
						name="name"
						autoComplete="name"
						variant="standard"
						error={usernameError}
						helperText={
							usernameError
								? "Please enter a name between 5-15 characters"
								: "This appears on your profile"
						}
						onChange={handleNameChange}
					/>
					<Typography
						variant="body2"
						align="start"
						sx={{
							fontWeight: "bold",
							pt: "20px",
							pb: "10px",
						}}>
						What's your date of birth?
					</Typography>
					<TextField
						required
						fullWidth
						id="date"
						type="date"
						name="date"
						autoComplete="date"
						error={dateError}
						helperText={
							dateError ? "Enter a valid birth date" : null
						}
						onChange={handleDateChange}
					/>
					<Typography variant="body1" align="start">
						What's your gender?
					</Typography>
					<Grid
						container
						spacing={2}
						justifyContent="center"
						alignItems="center">
						<Grid item xs={3}>
							<FormControlLabel
								control={
									<Checkbox
										value="male"
										color="success"
										onChange={handleCheckboxChange}
										checked={
											selectedCheckboxValue === "male"
										}
									/>
								}
								label="Male"
							/>
						</Grid>
						<Grid item xs={3}>
							<FormControlLabel
								control={
									<Checkbox
										value="female"
										color="success"
										onChange={handleCheckboxChange}
										checked={
											selectedCheckboxValue === "female"
										}
									/>
								}
								label="Female"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								control={
									<Checkbox
										value="non-binary"
										color="success"
										onChange={handleCheckboxChange}
										checked={
											selectedCheckboxValue ===
											"non-binary"
										}
									/>
								}
								label="Non-binary"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormControlLabel
								control={
									<Checkbox
										value="other"
										color="success"
										onChange={handleCheckboxChange}
										checked={
											selectedCheckboxValue === "other"
										}
									/>
								}
								label="Other"
							/>
						</Grid>
						<Grid item xs={8}>
							<FormControlLabel
								control={
									<Checkbox
										value="preferNotToSay"
										color="success"
										onChange={handleCheckboxChange}
										checked={
											selectedCheckboxValue ===
											"preferNotToSay"
										}
									/>
								}
								label="Prefer not to say"
							/>
						</Grid>
					</Grid>
					<Stack direction={{ sm: "column" }}>
						<FormControlLabel
							sx={{ marginTop: "10px" }}
							control={
								<Checkbox
									value="marketingMessages"
									color="success"
								/>
							}
							label="I would prefer not to receive marketing messages from Spotify"
						/>
						<FormControlLabel
							control={
								<Checkbox
									value="registationData"
									color="success"
								/>
							}
							label="Share my registration data with Spotify's content providers for marketing purposes."
						/>
					</Stack>

					<ThemeProvider theme={spotifyButtonTheme}>
						<Button
							disabled={isDisabled}
							type="submit"
							fullWidth
							variant="outlined"
							sx={{ mt: 3, mb: 2 }}>
							<span>Sign up</span>
						</Button>
					</ThemeProvider>
					<Typography variant="body1" align="center">
						Have an account?{" "}
						<Link href="/login" variant="body2">
							Log In
						</Link>
					</Typography>
				</Box>
			</Box>
		</Container>
	);
}
