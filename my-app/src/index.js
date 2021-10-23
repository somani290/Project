import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Login from './components/login';
// import Main from './components/Main';
import Manageregister from './components/manageregister';
import Register from './components/register';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
function Appp(){
  return(
    <Router>
      <Switch>
      <Route exact="true" path="/" component={Register} />
      {/* <Route path="/register" component={Register} /> */}
      <Route path="/login" component={Login} />
      <Route path="/manageregister" component={Manageregister} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <Appp />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vita
