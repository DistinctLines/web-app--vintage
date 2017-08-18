import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import BasketItem from './basketitem';
require('../css/basket.scss');

class Basket extends Component {

  constructor(props){
    super(props);
    this.state = {
        cart: [],
        total: 0
    }

  }

    containsKey(arr, name){

        for(var i = 0; i < arr.length; i++){
            if(arr[i].id === name){
                return true;
            }
        }
        return false;
  }

  componentDidMount(){

    var { cart } = this.props;

    var itemNames = [];
    var total = 0;

    // console.log('item size' + cart.length);

    cart.map((item, index) => {

        total += item.cost;

        if(!this.containsKey(itemNames, item.name)){
            itemNames.push({id: item.name, item: item, amt: 1});
            // console.log('added new entry');
        }
        else
            for(var i = 0; i < itemNames.length; i++){
                 
                if(itemNames[i].id == item.name){
                    itemNames[i].amt = itemNames[i].amt + 1;
                    // console.log('updated entry');
                }
            }

        // console.log(itemNames);
    });

    this.setState({cart: itemNames});
    this.setState({total: total});

  }

  render(){

    return(
      <div className="main container">
        <div className="left-main-column">
            <div className="side-nav">
                <ul>
                    <li>
                        <span>
                          <i className="fa fa-shopping-basket" aria-hidden="true">
                          </i>
                            Basket
                        </span>
                    </li>
                    <li className="active">
                        <span>
                          <i className="fa fa-chevron-right" aria-hidden="true">
                          </i>
                            Checkout
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="right-main-column">
            <h3>My Basket</h3>
            <form action="/basket/" method="post" id="form-cartoverview">
                <input type="hidden" name="updatecart" value="true"></input>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="desc">Item</th>
                            <th className="price hidden-xs">Price</th>
                            <th className="quantity">Qty</th>
                            <th className="subtotal">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cart.map((item, index) => {
                                return <BasketItem key={index} item={item} />
                            })
                        }
                    </tbody>
                </table>
            </form>
            <div className="total">
                <div className="inner">
                    <p className="strong">TOTAL</p> 
                    <div className="total-price">
                        £{parseFloat(Math.round(this.state.total * 100) / 100).toFixed(2)}
                    </div>
                </div>
            </div>
            <div className="proceed">
              <button >
                <i className="fa fa-chevron-right"></i>
                <span>Proceed to checkout</span>
              </button>
            </div>
        </div>
    </div>
    );
  }

}

export default Basket;
