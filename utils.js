function createElement(element) {
	return document.createElement(element);
}

function findImageNode(element) {
	let imageNode;
	
	for (node in element.children) {
		if (element.children[node].nodeName === 'IMG') {
			imageNode = element.children[node];
		}
	}

	return imageNode;
}

function querySelector(element) {
	if (typeof element !== 'string')
		throw new Error('element must be a string');
	return document.querySelector(element);
}