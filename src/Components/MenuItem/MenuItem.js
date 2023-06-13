import Link from "next/link";

export function MenuItem({ children, imgSrc, imgAlt }) {
	function handleClick() {}

	const pathName = imgAlt === "Home" ? "/dashboard" : "/dashboard/search";

	return (
		<Link href={pathName} shallow>
			<img alt={imgAlt} src={imgSrc} className="w-5 inline-block" />
			<span className="pl-6">{children}</span>
		</Link>
	);
}
