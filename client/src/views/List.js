import React from 'react';
import ListItem from './ListItem';

export default class List extends React.Component {

    render() {

		const items = this.props.items.map((item) => {
			return 	<ListItem>
						{item.text}
					</ListItem>;
		});

        return 	<div className='list'>
					{items}
				</div>;
    }

}
