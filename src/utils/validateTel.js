// regular expression to match telephone number format
export const validateTel = (tel) => {
	const regex = /^\+\d+$/;
	return regex.test(tel);
};
