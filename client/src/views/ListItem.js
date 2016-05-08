import React from 'react';

export default class ListItem extends React.Component {

  render() {
    return <div className='listitem'>{this.props.text}</div>;
  }

}
