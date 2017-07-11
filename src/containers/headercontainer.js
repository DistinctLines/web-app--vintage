import React, { Component } from 'react';
import Header from '../components/header';
import MobileMenu from '../components/mobile-menu';
import { login_user } from '../actions';
import { connect } from 'react-redux';

class HeaderContainer extends Component {

  render(){

    return (
      <Header {...this.props}></Header>
    );
  }
}

const mapStateToProps = state => {

  const { login } = state;
  const { token } = login;

  return {
    token
  };

};

export default connect(mapStateToProps, undefined)(HeaderContainer);
