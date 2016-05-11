import React from 'react';

export default React.createClass({

	onClick (event) {
		this.props.item.toggle();
	},

	render () {

		return 	<li onClick={this.onClick} className={this.props.item.closed ? 'closed' : ''}>
					{this.props.item.text}
					{this.props.children}
				</li>;
	}

});
