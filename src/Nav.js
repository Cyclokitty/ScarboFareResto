import React from 'react';
import './Nav.css';

class Nav extends React.Component {
  handleClick = () => {
    console.log('boop the About');
  }
  render() {
    return (
      <ul className='Nav'>
        <li onClick={this.handleClick}>About </li>
        <li>Menu</li>
        <li>Contact</li>
        <li>Reviews</li>
      </ul>
    )
  }

}

export default Nav;
