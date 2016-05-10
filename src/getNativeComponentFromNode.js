const ReactDOMComponentTree = require('react/lib/ReactDOMComponentTree');
const invariant = require('invariant');

module.exports = (element) => {
	checkArguments(element);

	return ReactDOMComponentTree.getInstanceFromNode(element);
};

function checkArguments(element) {
	invariant(
		element instanceof HTMLElement,
		`expect %s as an HTMLElement instance`,
		element
	);
}
