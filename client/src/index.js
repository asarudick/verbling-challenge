import ReactDOM from 'react-dom';
import React from 'react';
import App from './views/App';
import Items from './models/Items';

const items = new Items();
items.add('aaa');
items.add('aab');
items.add('abb');
items.add('bbb');
items.add('bbc');
items.add('bcc');

// Rerender on each event.
_.forEach(['toggle', 'collapse', 'expand', 'add', 'filter'], (event) => {
	items.on(event, () => {
		ReactDOM.render(<App items={items}/>, document.getElementById('app'));
	});
});

ReactDOM.render(<App items={items}/>, document.getElementById('app'));
