import EventEmitter from 'events';

export default class Item extends EventEmitter {
	constructor (text) {
		super();
		this.text = text;
		this.closed = true;
	}

	toggle () {
		this.closed = !this.closed;
		this.emit('toggle', this);
	}

	collapse () {
		this.closed = true;
		this.emit('collapse', this);
	}

	expand () {
		this.closed = false;
		this.emit('expand', this);
	}
}
