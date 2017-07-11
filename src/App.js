import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import BasketContainer from './containers/basketcontainer';
import LoginContainer from './containers/logincontainer';
import HeaderContainer from './containers/headercontainer';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

require('./css/style.scss');

class App extends Component {
   render() {
      return (
        <div className="main-div">
          <Header />
          <Router history={hashHistory}>
            <Route path="/" component={LoginContainer}/>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/register" component={Footer} />
            <Route path="/basket" component={BasketContainer} />
          </Router>
          <Footer />
        </div>
      );
   }
}

export default App;
