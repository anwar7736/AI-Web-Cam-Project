import React, {Component} from 'react';
import axios from 'axios';
import styles from './style.module.css';
import Button from 'react-bootstrap/Button';
export default class Home extends React.Component{
	constructor(){
		super()
		this.state = {
			lists : [],
		}
	}
	componentDidMount(){
		axios.get('https://restcountries.eu/rest/v2/all')
		.then(response=>{
			this.setState({lists: response.data})
		})
		.catch(error=>{
			alert('Something went wrong!');
		})
	}
	login=()=>{
		sessionStorage.setItem('login', true);
	}	
	logout=()=>{
		sessionStorage.clear();
	}
	render(){
				if(sessionStorage.getItem('login')==null){
					return (<Button onClick={this.login} className="btn-success">Login</Button>);
				} 
				else{
					return (<Button onClick={this.logout} className="btn-danger">Logout</Button>);
				}
					
					
		
			
				
	}
}
