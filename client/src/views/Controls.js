import React from 'react';

export default class Controls extends React.Component {
	onExpandAll () {
		this.props.items.expandSelected();
	}

	onCollapseAll () {
		this.props.items.collapseSelected();
	}

	onToggleAll () {
		this.props.items.toggleSelected();
	}

	onAdd () {
		const text = window.prompt('What would you like to add?');

		// Ignore empty submissions.
		if (!text) {
			return;
		}

		this.props.items.add(text);
	}


	shouldComponentUpdate (nextProps) {
		// Only update if the Items instance changes.
		return nextProps.items !== this.props.items;
	}

    render() {
        return 	<div className='controls'>
					<div className="left">
						<button onClick={this.onExpandAll.bind(this)}>Expand All</button>
						<button onClick={this.onCollapseAll.bind(this)}>Collapse All</button>
						<button onClick={this.onToggleAll.bind(this)}>Toggle All</button>
					</div>
					<div className="right">
						<button onClick={this.onAdd.bind(this)}>Add</button>
					</div>
				</div>;
    }

}
