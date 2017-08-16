import React, { Component } from 'react';
import { logoutUser, getUsers, getImage } from '../services/data';
import { Link } from 'react-router';

require('../css/header.scss');

export default class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      status: 'non-active'
    }

    this.handleMenu = this.handleMenu.bind(this);
    this.handleLogout.bind(this);
  }

   handleMenu() {

    if (this.state.status === 'non-active')
      this.setState({ status: 'active' });
    else
      this.setState({ status: 'non-active' });

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
                  <Link to="/display">Shop</Link>

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
                  <Link to="/basket">SHOP
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
                <i className="fa fa-bars" onClick={this.handleMenu}>
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
                  <a>
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
        <div className={'mobile-menu ' + this.state.status}>
          <div className="top">
            <span className="shut">
              <i className="fa fa-times" onClick={this.handleMenu}></i>
              Close
            </span>
          </div>
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
        </div>
      </div>
    )
  }

}
