import React, { Component } from 'react';

require('../css/header.scss');

class MobileMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: 'non-active'
        }

        this.handleMenu = this.handleMenu.bind(this);

    }

    handleMenu() {

        if (this.state.currentState === 'non-active')
            this.setState({ currentState: 'active' });
        else
            this.setState({ currentState: 'non-active' });

        console.log(this.state);
    }

    render() {
        return (
            <div></div>
            // <div className={'mobile-menu ' + this.state.status}>
            //     <span className="shut">
            //         <i className="fa fa-times"></i>
            //         Close
            //     </span>
            //     <div className="inner">
            //         <p className="title">
            //             <span>Shop All</span>
            //         </p>
            //         <ul>
            //             <li><a href="">Knitwear</a></li>
            //             <li><a href="">Knitwear</a></li>
            //             <li><a href="">Knitwear</a></li>
            //             <li><a href="">Knitwear</a></li>
            //             <li><a href="">Knitwear</a></li>
            //         </ul>
            //     </div>
            // </div>
        );
    }

}

export default MobileMenu;