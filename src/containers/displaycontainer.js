import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from '../components/display';

class DisplayContainer extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Display {...this.props} />
        );
    }

}

const mapStateToProps = state => {

    const { login, items } = state;
    const { token } = login;

    return {
        token,
        items
    };

}

export default connect(mapStateToProps, undefined) (DisplayContainer);