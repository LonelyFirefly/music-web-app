export const validateEmail = (email) => {
	// regular expression to match email format
	const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
	return regex.test(email);
};
