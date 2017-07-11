import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider } from 'react-redux';
import HeaderContainer from './containers/headercontainer';
import Footer from './components/footer';
import LoginContainer from './containers/logincontainer';
import reducers from './reducers/index';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router'

const store = createStore(reducers);

// const store = compose(autoRehydrate())(createStore)(reducers);

// persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('app')
);
