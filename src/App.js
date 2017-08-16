import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import BasketContainer from './containers/basketcontainer';
import LoginContainer from './containers/logincontainer';
import HeaderContainer from './containers/headercontainer';
import ItemContainer from './containers/itemcontainer';
import DisplayContainer from './containers/displaycontainer';
import RootContainer from './containers/rootcontainer';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import $ from 'jquery'

class App extends Component {

   render() {
      return (
        <div className="main-div">
          <Router history={hashHistory}>
            <Route path="/" component={RootContainer}>
              <IndexRoute component={LoginContainer}/>
              <Route path="/register" component={Footer} />
              <Route path="/basket" component={BasketContainer} />
              <Route path="/display" component={DisplayContainer} />
              <Route path="/:itemId" component={ItemContainer} />
            </Route>
          </Router>
        </div>
      );
   }
}

export default App;
