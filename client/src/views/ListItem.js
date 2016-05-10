import React from 'react';

export default React.createClass({

	getInitialState () {
		return { closed: true };
	},

	onClick () {
		this.setState({ closed: !this.state.closed });
	},

	render () {

		return 	<li className={this.state.closed ? 'closed' : ''} onClick={this.onClick}>
					{this.props.children}
				</li>;
	}

});
