import Link from "next/link";

export function Button({ children, buttonColor }) {
	const buttonText = children;
	const buttonClass =
		buttonColor === "light" ? "bg-slate-50 text-black" : "bg-slate-50/0";
	return (
		<button
			className={`w-max px-6 py-3 my-2 font-bold mr-8 rounded-3xl ${buttonClass}`}>
			<Link href={buttonText === "Log in" ? "login" : "signup"}>
				{buttonText}
			</Link>
		</button>
	);
}
