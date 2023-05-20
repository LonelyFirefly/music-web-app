import { Button } from "../Button/Button";
export function TopBar() {
	return (
		<div className="min-h-max bg-zinc-950 flex justify-end fixed top-0 left-0 right-0">
			<Button buttonColor="dark">Sign up</Button>
			<Button buttonColor="light">Log in</Button>
		</div>
	);
}
