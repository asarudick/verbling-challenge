import React from 'react';
import SearchBar from './SearchBar';
import List from './List';
import Controls from './Controls';

export default class App extends React.Component {

    render() {
        return 	<div className='app'>
					<SearchBar items={this.props.items} />
		            <List items={this.props.items} />
		            <Controls items={this.props.items} />
				</div>;
    }

}
