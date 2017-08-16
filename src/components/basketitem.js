import React, { Component } from 'react';

class BasketItem extends Component {

    render(){

        const { item } = this.props;

        return(
            <tr>
                <td className="desc">{ item.name }</td>
                <td className="price">{ item.cost }</td>
                <td className="quantity">1</td>
                <td className="subtotal">{ item.cost }</td>
            </tr>
        );
    };

}

export default BasketItem;