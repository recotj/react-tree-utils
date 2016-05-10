const { checkArguments } = require('./recordOwnerComponentForNode');

const OWNERS = Symbol.for('owners');
const INTERNAL_KEY = Symbol.for('component-class-internal-key');

module.exports = (element, componnent) => {
	checkArguments(element, componnent);

	const owners = element[OWNERS];
	if (typeof owners !== 'object') return;

	const ComponentClass = componnent.constructor;

	Reflect.deleteProperty(element, ComponentClass[INTERNAL_KEY]);
};
