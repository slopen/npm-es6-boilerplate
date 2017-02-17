export default class Module {

	constructor (options) {
		this.options = options;
	}

	method (...args) {
		console.log ('method', args);
	}

	autobindMethod = (...args) => {
		console.log ('autobindMethod', args);
	}

}