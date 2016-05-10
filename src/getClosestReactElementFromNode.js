const getNativeComponentFromNode = require('./getNativeComponentFromNode');

module.exports = (node) => {
	const component = getNativeComponentFromNode(node);
	if (!component) return null;
	return component['_currentElement'];
};
