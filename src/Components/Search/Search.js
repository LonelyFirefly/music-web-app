import { useState } from "react";

export function Search() {
	const [searchQuery, setSearchQuery] = useState("");

	function handleChange(e) {
		setSearchQuery(e.target.value);
	}

	return (
		<div className="justify-self-end z-20 text-sm relative min-w-full">
			<input
				className="max-w-full rounded absolute right-64"
				type="search"
				placeholder="What do you want to listen to?"
				value={searchQuery}
				onChange={handleChange}
			/>
		</div>
	);
}
