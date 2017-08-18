import React, { Component } from 'react';
import { Link } from 'react-router';

require('../css/display.scss');

class DisplayItem extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="display-items">
                <div className="display-img">
                    <Link to={'/' + this.props.item._id}>
                        <img src={this.props.item._id + "1.jpg"}>
                        </img>
                    </Link>
                </div>
                <div className="image-description">
                    <h1>{this.props.item.name}</h1>
                    <span className="desc">Soft and cosy</span>
                    <p>
                        <span className="price">£23.00</span>
                        <span className="basket">
                            <i className="fa fa-heart-o"></i>                        
                        </span>
                    </p>
                </div>
            </div>
        );
    }

}

export default DisplayItem;