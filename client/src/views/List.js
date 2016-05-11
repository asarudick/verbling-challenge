import React from 'react';
import ListItem from './ListItem';
import _ from 'lodash';
export default class List extends React.Component {

	render() {
		let id = 0;
		const items = _.map(this.props.items, (item) => <ListItem key={id++} item={item}></ListItem>);

		return 	<ul>
					{items}
				</ul>;
	}

}
