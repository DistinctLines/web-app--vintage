import React, { Component } from 'react';
import Login from '../components/login';
import Header from '../components/header';
import Footer from '../components/footer';
import { login_user } from '../actions';
import { connect } from 'react-redux';

class LoginContainer extends Component {

  render(){
    return (
      <Login {...this.props}></Login>
    );
  }

}

const mapStateToProps = state => {

  console.log(state);

  const { login } = state;
  const { token, id } = login;

  return {
    token
  };

}

const mapDispatchToProps = dispatch => {
  return ({
    login: (token, id) => {dispatch(login_user(token, id))}
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
