import React, { Component } from 'react';

require('../css/header.scss');

class MobileMenu extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const { status } = this.props;

        return ( 
        
            <div className={'mobile-menu ' + status}>
                <span className="shut">
                    <i className="fa fa-times"></i>
                    Close
                </span>
                <div className="inner">
                    <p className="title">
                    <span>Shop All</span>
                    </p>
                    <ul>
                        <li><a href="">Knitwear</a></li>
                        <li><a href="">Knitwear</a></li>
                        <li><a href="">Knitwear</a></li>
                        <li><a href="">Knitwear</a></li>
                        <li><a href="">Knitwear</a></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default MobileMenu;