import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Not from './Components/notfound.js';
import {NavLink, Route, BrowserRouter as Router, Switch} from '../node_modules/react-router-dom';
const routes = [
		<div>
		<Router>
			<ul>
				<li><NavLink exact activeStyle={{color: 'red'}}to="/">Home</NavLink></li>
				<li><NavLink exact activeStyle={{color: 'red'}}to="/about/1/anwar">About</NavLink></li>
				<li><NavLink exact activeStyle={{color: 'red'}}to="/contact">Contact</NavLink></li>
			</ul>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/about/:id/:name" component={About}/>
				<Route exact path="/contact" component={Contact}/>
				<Route component={Not}/>
			</Switch>
		</Router>
		</div>
	
	]
ReactDOM.render(
   <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
