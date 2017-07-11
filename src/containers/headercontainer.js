import React, { Component } from 'react';
import Header from '../components/header';
import MobileMenu from '../components/mobilemenu';
import { login_user } from '../actions';
import { connect } from 'react-redux';

class HeaderContainer extends Component {

  render(){

    return (
      <div>
        <Header {...this.props}></Header>
        <MobileMenu {...this.props}></MobileMenu>
      </div>
    );
  }
}

const mapStateToProps = state => {

  const { login, mobile } = state;
  const { token } = login;
  const { status } = mobile;

  console.log(status);

  return {
    token,
    status
  };

};

export default connect(mapStateToProps, undefined)(HeaderContainer);
