function dbQuery(password) {
	if (password === "12345") return true;
	else return false;
}

export const checkPasswordInDB = (password) => {
	const passwordIsValid = dbQuery(password);
	if (passwordIsValid) {
		return true;
	} else {
		return false;
	}
};
