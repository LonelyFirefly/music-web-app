export function MenuItem({ children, imgSrc, imgAlt }) {
	return (
		<div>
			<img
				alt={imgAlt}
				src={`../../utils/${imgSrc}`}
				className="w-5 inline-block"
			/>
			<a className="pl-6" href="#">
				{children}
			</a>
		</div>
	);
}
