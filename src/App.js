import React ,{Component ,Fragment} from 'react';
// import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Header from "./components/Layout/Header";
import Asider from "./components/Layout/Asider";
import {GlobalStyled} from "./style";
import './assets/bootstrap/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './store';
import Home from "./components/Home";


function App() {
  return (
      <Provider store={store}>
          <Fragment>

              <GlobalStyled/>

                <Header/>
                <Asider/>

                <Home/>

          </Fragment>

      </Provider>
  );
}

export default App;
