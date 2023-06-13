import { Button } from "../Button/Button";
import { Search } from "../Search/Search";
export function TopBar() {
	return (
		<div className="min-h-max bg-zinc-950 grid grid-cols-2 justify-end items-center fixed top-0 left-0 right-0 w-screen">
			<Search />
			<div className="justify-self-end">
				<Button buttonColor="dark">Sign up</Button>
				<Button buttonColor="light">Log in</Button>
			</div>
		</div>
	);
}
