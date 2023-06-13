import { useState } from "react";

export function Search() {
	const [searchQuery, setSearchQuery] = useState("");

	function handleChange(e) {
		setSearchQuery(e.target.value);
	}

	return (
		<div className="justify-self-end">
			<input
				className="max-w-full"
				type="search"
				placeholder="What do you want to listen to?"
				value={searchQuery}
				onChange={handleChange}
			/>
		</div>
	);
}
