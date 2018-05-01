import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Products extends Component {

  render() {
    return (
      <div id='main'>
        Products Page
        <Link to='product/ford'>Ford</Link>
        <Link to='product/bmw'>Bmw</Link>
        <Link to='product/honda'>Honda</Link>
      </div>
    )
  }
}

export default connect(state => ({
}))(Products)
