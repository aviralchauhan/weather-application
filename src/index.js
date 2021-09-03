import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./NavBar.css";
import News from './News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Header from './Header';


ReactDOM.render(
  

  <React.StrictMode>
    <Router>  
    <Header />
      <Switch>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
     </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
