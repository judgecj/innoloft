import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Products from "../product/product"
//

class  Main extends Component {
  componentWillMount() {
  
  }

  componentWillReceiveProps(nextProps) {
   
  }

  render() {
    
    return (
      <div style={{width:"100%"}}>
       
        <Products />
        
      </div>
    );
  }
}



export default Main;