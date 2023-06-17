export const validateUsername = (username) => {
	if (username.length > 15 || username.length < 5) {
		return false;
	}
	return true;
};
