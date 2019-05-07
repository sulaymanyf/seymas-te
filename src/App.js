import React, {Component, Fragment} from 'react';
import './assets/css/App.css';
import Header from "./components/Layout/Header";
import Asider from "./components/Layout/Asider";
import {GlobalStyled} from "./style";
import './assets/bootstrap/css/bootstrap.min.css'
import {Provider} from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";

var createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();


function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Fragment>
                    <GlobalStyled/>
                    <Header/>
                    <Asider/>
                    <Content/>
                    {/*<Route path='/detail/:id' exact component={Detail}></Route>*/}
                    {/*<Home/>*/}
                    <Footer/>
                </Fragment>
            </Router>
        </Provider>
    );
}

export default App;
