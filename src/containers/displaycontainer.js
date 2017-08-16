import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from '../components/display';

class DisplayContainer extends Component {

    constructor(props){
        super(props);
    }

    render(){

        console.log(this.props);

        return(
            <Display {...this.props} />
        );
    }

}

const mapStateToProps = state => {

    const { login, items } = state;
    const { token, id } = login;

    return {
        token,
        items,
        id
    };

}

export default connect(mapStateToProps, undefined) (DisplayContainer);