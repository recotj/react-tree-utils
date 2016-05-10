const invariant = require('invariant');

const OWNERS = Symbol.for('owners');
const INTERNAL_KEY = Symbol.for('component-class-internal-key');

module.exports = (element, type) => {
	checkArguments(element, type);

	const components = element[OWNERS];
	if (!components || Object.keys(components).length === 0) return null;

	const internalKey = type[INTERNAL_KEY];
	if (!internalKey) return null;

	return components[internalKey];
};

function checkArguments(element, type) {
	invariant(
		element instanceof HTMLElement,
		`expect %s as an HTMLElement instance`,
		element
	);

	invariant(
		typeof type === 'function',
		`expect %s as a React.Component Class`
	);
}
