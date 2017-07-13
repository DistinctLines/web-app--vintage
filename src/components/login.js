import React, { Component } from 'react';
import { Link } from 'react-router';
import { loginUser } from '../services/data';
import Form from 'react-router-form'
require('../css/login.scss');

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      token: ''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    // loginUser('admin', 'admin');
    console.log('called handle submit');
    let userLogin = loginUser('taylor123', '1');
    Promise.resolve(userLogin).then(data => {
      this.setState({ token : data.token }, function() {
        console.log(this.state.token);
      });
      this.props.login(data.token);
    });
  }

  handleUpload(event){
    console.log(event.target.files);
    // uploadFile(event.target.files[0], this.state.token);
  }

  handlePasswordChange(e){
    this.setState({ password: e.target.value })
  }

  handleUsernameChange(e){
    console.log(e.target.value);
    this.setState({ username: e.target.value })
  }

  render(){

    console.log('login component', this.props);

    return (
      <div className="container login">
        <div className="main-header">
          <h2>Your Account</h2>
        </div>
        <div className="login-container">
          <div id="login-column">
            <h2 className="lines">
              <span>Log In</span>
            </h2>
            <form onClick={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Email Address *</label>
                <input id="username" className="form-control" name="username" placeholder="Email address" type="text" onChange={this.handleUsernameChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <input id="password" className="form-control" name="password" placeholder="Password" type="password" onChange={this.handlePasswordChange}/>
              </div>
              <div className="row">
                <div className="checkbox">
                  <input type="checkbox" />
                  <label>Remember me</label>
                </div>
              <div className="forgotten">
              </div>
            </div>
          <div className="form-group">
            <button type="submit" className="login-btn" name="login">
              <i className="fa fa-sign-in" aria-hidden="true">
              </i>
              <span>Log in</span>
            </button>
            </div>
          </form>
      </div>
      <div id="register-column">
        <h2 className="lines">
          <span>Create Account</span>
        </h2>
        <Form to="/login">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input id="fullName" className="form-control" name="fullName" placeholder="Full name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email address *</label>
            <input id="emailAddress" className="form-control" name="emailAddress" placeholder="Email address" type="email" />
          </div>
          <div className="form-group-multiple">
            <div className="row-first">
              <label htmlFor="emailAddress">Password *</label>
              <input id="registerPassword" className="form-control" name="emailAddress" placeholder="Password" type="password"/>
            </div>
            <div className="row">
              <label htmlFor="emailAddress">Confirm Password *</label>
              <input id="emailAddress" className="form-control" name="emailAddress" placeholder="Confirm password" type="password"/>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="login-btn" name="login">
              <i className="fa fa-sign-in" aria-hidden="true">
              </i>
              <span>Register</span>
            </button>
          </div>
          <input type="file" name="filename" onChange={this.handleUpload}/>
        </Form>
      </div>
      </div>
    </div>
    );
  }

}
