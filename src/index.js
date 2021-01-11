import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from './components/reducer/store';
import NavBar from "./sidebars/NavBar";
import Land from "./components/pages/Land";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(

  <React.StrictMode>
   
    <Provider store={store}>
    <Router>
    <Switch>
      <Route exact path="/userpage" component={NavBar} />
      <Route  path="/"  component={App} />
    </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
