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
import { retrieve_data } from './actions/index';
import { fetchdata } from './middleware/fetchdata';
import { Router, Route, Link, IndexRoute, browserHistory, hashHistory } from 'react-router';
// import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// import { BrowserRouter as Router, Route, Link } from 'react-router'

const store = createStore(reducers, applyMiddleware(fetchdata));
// const createStoreWithMiddleware = applyMiddleware()(createStore);

// const store = compose(autoRehydrate())(createStore)(reducerswww.facebohttp://www.facebook.com/ok.com);

// persistStore(store);

store.dispatch(retrieve_data());

ReactDOM.render(
  <Provider store={store}>
    < App />
  </Provider>,
  document.getElementById('app')
);
