import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

class RootContainer extends Component {

    render(){

        return(
            <div>
                < Header />
                {this.props.children}
                < Footer />
            </div>
        );
    }

}

export default RootContainer;