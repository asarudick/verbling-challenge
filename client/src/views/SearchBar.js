import React from 'react';

export default React.createClass({

	getInitialState () {
		return {value: ''};
	},

	shouldComponentUpdate (nextProps) {
		// Only update if the filter changes.
		return nextProps.items.filter !== this.props.items.filter;
	},

	onChange (event) {
    	this.setState({value: event.target.value});
		this.props.items.filter = event.target.value;
		this.forceUpdate();
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
