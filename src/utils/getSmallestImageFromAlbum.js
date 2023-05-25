export function getSmallestImageFromAlbum(albumImages) {
	// go over each image, check its width,
	// if current width is smaller, then display curr
	// if previos is smaller, display previos
	const smallestImage = albumImages.reduce((acc, curr) => {
		return curr.width < acc.width ? curr : acc;
	});
	return smallestImage;
}
