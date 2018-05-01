import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ProductDisplay extends Component {

  render() {
    console.log("props",this.props.match.params.id)
    return (
      <div id='main'>
        <h2>{this.props.match.params.id}</h2>
        <Link to='/products'>Back to products</Link>
      </div>
    )
  }
}

export default connect(state => ({
}))(ProductDisplay)
