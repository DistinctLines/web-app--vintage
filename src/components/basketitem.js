import React, { Component } from 'react';

class BasketItem extends Component {

    render(){

        const { item } = this.props;

        return(
            <tr>
                <td className="desc">{ item.item.name }</td>
                <td className="price">{ item.item.cost }</td>
                <td className="quantity">{ item.amt }</td>
                <td className="subtotal">{ item.item.cost * item.amt}</td>
            </tr>
        );
    };

}

export default BasketItem;