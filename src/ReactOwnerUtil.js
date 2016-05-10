const ReactDOM = require('react-dom');

const OWNERS = Symbol('react-owners');
const INTERNAL_KEY = Symbol('react-class-internal-key');

const generateInternalKey = () => Symbol(`internal-key$${Math.random().toString(36).slice(2)}`);

module.exports.recordOwner = (component, owner) => {
	if (!component) return;

	owner = owner || component['_owner'];
	if (!owner) return;

	const element = ReactDOM.findDOMNode(component) || component;
	if (!(element instanceof HTMLElement)) return;

	const ReactClass = owner.constructor;
	if (typeof ReactClass !== 'function') return;

	const internalKey = ReactClass[INTERNAL_KEY] || (ReactClass[INTERNAL_KEY] = generateInternalKey());
	const owners = element[OWNERS] || (element[OWNERS] = {});
	owners[internalKey] = owner;
};

module.exports.unrecordOwner = (component, owner) => {
	if (!component) return;

	owner = owner || component['_owner'];
	if (!owner) return;

	const element = ReactDOM.findDOMNode(component) || component;
	if (!(element instanceof HTMLElement)) return;

	const ReactClass = owner.constructor;
	if (typeof ReactClass !== 'function') return;

	Reflect.deleteProperty(element, ReactClass[INTERNAL_KEY]);
};

module.exports.getOwner = (component, ownerType) => {
	if (!component) return null;
	if (component['_owner']) return component['_owner'];
	if (typeof ownerType !== 'function') return null;

	const element = ReactDOM.findDOMNode(component) || component;
	if (!(element instanceof HTMLElement)) return null;

	const owners = element[OWNERS];
	if (!owners || Object.keys(owners).length === 0) return null;

	const internalKey = ownerType[INTERNAL_KEY];
	if (!internalKey) return null;

	return owners[internalKey];
};
