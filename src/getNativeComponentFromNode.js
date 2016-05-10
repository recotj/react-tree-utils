const ReactDOMComponentTree = require('react/lib/ReactDOMComponentTree');

module.exports = (node) => {
	if (!(node instanceof HTMLElement)) return null;
	return ReactDOMComponentTree.getInstanceFromNode(node);
};
