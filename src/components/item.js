import React, { Component } from 'react';
import $ from 'jquery';

require('../css/item.scss');

class Item extends Component{

  constructor(props){
    super(props);

  }

  componentDidMount(){
    $(document).ready(function(){
      $('.bxslider').bxSlider();
    });
  }

  render(){
    return (
      <div>
      </div>
    );
  }

}

export default Item;
