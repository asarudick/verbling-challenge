import React from 'react';

export default class Controls extends React.Component {

    render() {
        return 	<div className='controls'>
					<div className="left">
						<button className='open-all'>Open All</button>
						<button className='close-all'>Close All</button>
						<button className='toggle-all'>Toggle All</button>
					</div>
					<div className="right">
						<button className='add'>Add</button>
					</div>
				</div>;
    }

}
