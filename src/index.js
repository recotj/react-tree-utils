const getNativeComponentFromNode = require('./getNativeComponentFromNode');
const getClosestReactElementFromNode = require('./getClosestReactElementFromNode');
const getOwnerComponentFromNode = require('./getOwnerComponentFromNode');
const recordOwnerComponentForNode = require('./recordOwnerComponentForNode');
const unsetOwnerComponentRecordForNode = require('./unsetOwnerComponentRecordForNode');

module.exports = {
	getNativeComponentFromNode,
	getClosestReactElementFromNode,
	getOwnerComponentFromNode,
	recordOwnerComponentForNode,
	unsetOwnerComponentRecordForNode
};
