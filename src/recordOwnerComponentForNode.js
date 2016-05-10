const { Component } = require('react');
const ReactDOM = require('react-dom');
const invariant = require('invariant');

const OWNERS = Symbol.for('owners');
const INTERNAL_KEY = Symbol.for('component-class-internal-key');

const generateInternalKey = () => Symbol(`internal-key$${Math.random().toString(36).slice(2)}`);

module.exports = (element, component) => {
	checkArguments(element, component);

	const ComponentClass = component.constructor;
	const internalKey = ComponentClass[INTERNAL_KEY] || (ComponentClass[INTERNAL_KEY] = generateInternalKey());
	const owners = element[OWNERS] || (element[OWNERS] = {});
	owners[internalKey] = component;
};

module.exports.checkArguments = checkArguments;

function checkArguments(element, component) => {
	invariant(
		element instanceof HTMLElement,
		`expect %s as an HTMLElement instance`,
		element
	);

	invariant(
		component instanceof Component,
		`expect %s as a React.Component instance`,
		component
	);

	const ownerElement = ReactDOM.findDOMNode(component);

	invariant(
		ownerElement instanceof HTMLElement,
		`no DOM node found with respect to the component %s, probably 'cause not mounted yet.`,
		component
	);

	invariant(
		ownerElement.contains(element),
		`the component %s is neither one of the ancestors of the element %s, nor the element %s itself`,
		component, element
	);
}
