import EventEmitter from 'events';
import _ from 'lodash';
import Item from './Item';
import levenshtein from 'fast-levenshtein';

export default class Items extends EventEmitter {
	constructor () {
		super();
		this._items = [];
		this._filter = '';
	}

	toggleAll () {
		_.forEach(this._items, (item) => {
			item.toggle();
		});
		this.emit('toggle', [this._items]);
	}

	collapseAll () {
		_.forEach(this._items, (item) => {
			item.collapse();
		});
		this.emit('collapse', [this._items]);
	}

	expandAll () {
		_.forEach(this._items, (item) => {
			item.expand();
		});
		this.emit('expand', [this._items]);
	}

	add (text) {
		const item = new Item(text);
		item
			.on('toggle', (item) => this.emit('toggle', [item]))
			.on('collapse', (item) => this.emit('collapse', [item]))
			.on('extend', (item) => this.emit('extend', [item]));

		this._items.unshift(item);
		this.emit('add', [item]);
	}

	search (str) {
		return _(this._items)
				.filter(a => a.text.length >= str.length && levenshtein.get(str, a.text) < a.text.length)
				.sort((a, b) => {
					// Prefer exact string matches.
					if (a.text === str) {
						return -1;
					}
					if (b.text === str) {
						return 1;
					}
					// Prefer strings that begin with the filter.
					if (_.startsWith(a.text, str)) {
						return -1;
					}
					if (_.startsWith(b.text, str)) {
						return 1;
					}
					// Otherwise, we'll sort by string distance.
					return levenshtein.get(str, a.text) - levenshtein.get(str, b.text);
				})
				.value();
	}

	get () {
		const filter = this._filter;

		if (!filter) {
			return this._items;
		}

		return this.search(filter);
	}

	set filter (str) {
		this._filter = str;
		this.emit('filter', str);
	}

	get filter () {
		return this._filter;
	}

}
