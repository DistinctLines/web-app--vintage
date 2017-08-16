import React, { Component } from 'react';
import Item from '../components/item';
import { connect } from 'react-redux';
import { add_item } from '../actions'

class ItemContainer extends Component {

    render(){
        return(
            <Item {...this.props}/>
        );
    }

}

const mapDispatchToProps = dispatch => {
    
    return ({
        addItem: (item) => {dispatch(add_item(item))}
    });

}

const mapStateToProps = (state) => {

    const {login, items} = state;
    const { token, id } = login;

    return {
        token,
        items,
        id
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);