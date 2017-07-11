import React, { Component } from 'react';
import Basket from '../components/basket';
import Header from '../components/header';
import Footer from '../components/footer';
require('../css/basket.scss');

class BasketContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header />
        <Basket />
        <Footer />
      </div>
    );
  }

}

export default BasketContainer;
