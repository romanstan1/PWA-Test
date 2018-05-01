import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

export default class Nav extends Component {

  render() {
    return (
      <nav>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/products'>View Products</NavLink>
      </nav>
    )
  }
}
