export const validatePassword = (password) => {
	const passwordRegex =
		/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
	return passwordRegex.test(password);
};
