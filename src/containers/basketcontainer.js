import React, { Component } from 'react';
import Basket from '../components/basket';
import Header from '../components/header';
import Footer from '../components/footer';
import { connect } from 'react-redux';

require('../css/basket.scss');

class BasketContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <Basket {...this.props}/>
    );
  }

}

const mapStateToProps = state => {

  const { cart } = state;

  return {
    cart
  };

}

export default connect(mapStateToProps, undefined)(BasketContainer);
