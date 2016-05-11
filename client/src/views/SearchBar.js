import React from 'react';

export default React.createClass({

	getInitialState () {
		return {value: ''};
	},

	onChange (event) {
    	this.setState({value: event.target.value});
		this.props.items.filter = event.target.value;
	},

	render () {
		return <input
					className='searchbar'
			        type='text'
			        value={this.state.value}
			        onChange={this.onChange}
					placeholder='Search'
				/>;
	}

});
