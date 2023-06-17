const { createTheme } = require("@mui/material");
import { green } from "@mui/material/colors";

export const spotifyButtonTheme = createTheme({
	palette: {
		primary: {
			main: "#1ED760",
			contrastText: "#111111",
		},
	},
});
