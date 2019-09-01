import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import axe from 'react-axe';
var axe = require('react-axe');

import routes from './route';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';

import {loadPost} from './actions/postsActions'

const store = configureStore();
store.dispatch(loadPost());
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,

    document.getElementById('app')



);
//hello test
