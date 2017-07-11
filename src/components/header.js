import React, { Component } from 'react';
import { logoutUser, getUsers } from '../services/data';
import { Link } from 'react-router';

require('../css/header.scss');

export default class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentState: 'non-active'
    }

    this.handleLogout.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu() {

    if(this.state.currentState === 'non-active')
      this.setState({ currentState: 'active' });
    else
      this.setState({ currentState: 'non-active'});

      console.log(this.state);
  }

  handleLogout(token){
    let logout = getUsers(token);
    Promise.resolve(logout).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  render(){

    console.log('header component', this.props);
    const { token } = this.props;

    return (
      <div>
        <div className="header container">
          <div className="row">
            <div className="left-header-column">
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/Kapada.Vintage" target="_blank">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="center-header-column">
              <ul className="main-menu">
                <li className="first-active">
                  <a href="/shop" title="Shop All">Shop</a>

                  <div className="dropdown-content">
                    <ul>
                      <li><a href="" title="select tops">Tops</a></li>
                      <li><a href="" title="select">Tops</a></li>
                      <li><a href="" title="select">Tops</a></li>
                      <li><a href="" title="select">Tops</a></li>
                      <li><a href="" title="select">Tops</a></li>
                      <li><a href="" title="select">Tops</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="shop/" title="New Items">New Items</a>
                </li>
                <li>
                  <Link to="/basket">
                    Sale
                  </Link>
                </li>
                <li>
                  <a href="shop/" title="Blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="mobile-header">
              <span>
                <i className={'fa fa-bars ' + this.state.currentState } onClick={this.handleMenu}>
                </i>
                Shop
              </span>
            </div>
            <div className="right-header-column">
              <ul>
                <li>
                  <a onClick={() => { this.handleLogout(token)}}>
                    <i className="fa fa-search"></i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-user">
                    </i>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-shopping-basket">
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*<div className={'mobile-menu ' + this.state.currentState}>
          <span className="shut">
            <i className="fa fa-times"></i>
            Close
          </span>
          <div className="inner">
            <p className="title">
              <span>Shop All</span>
            </p>
            <ul>
              <li><a href="">Knitwear</a></li>
              <li><a href="">Knitwear</a></li>
              <li><a href="">Knitwear</a></li>
              <li><a href="">Knitwear</a></li>
              <li><a href="">Knitwear</a></li>
            </ul>
          </div>
        </div>*/}
      </div>
    );
  }

}
