import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Login from './Login/Login';
import Createaccount from './Login/Createaccount';
import Forgotpassword from './Login/Forgotpassword';
import Dashboard from './dashboard/dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/createaccount' component={Createaccount} />
      <Route exact path='/forgotpassword' component={Forgotpassword} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='*' component={() => <h1>404 Not Found</h1>} />
    </Switch>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
