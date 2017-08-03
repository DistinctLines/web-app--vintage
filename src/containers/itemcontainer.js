import React, { Component } from 'react';
import Item from '../components/item';
import { connect } from 'react-redux';

class ItemContainer extends Component {

    render(){
        return(
            <Item {...this.props}/>
        );
    }

}

const mapStateToProps = (state) => {

    const {login, items} = state;
    const { token } = login;

    return {
        token,
        items
    };
};

export default connect(mapStateToProps, undefined)(ItemContainer);