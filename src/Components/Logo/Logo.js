export function Logo({ src, logoName }) {
	return (
		<div className="pt-5 pr-24 pb-8 pl-5">
			<img src={src} alt={logoName} className="w-40 pt-5 pb-8 pl-5" />
		</div>
	);
}
