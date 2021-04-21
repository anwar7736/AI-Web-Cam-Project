import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
export default class Contact extends React.Component{
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
	onChange=(e)=>{
		this.setState({selected: e.target.value})
	}
	render(){
			if(sessionStorage.getItem('login')==null){
					return <Redirect to="/" />
				} 
				else{
					return(
				<>
					<h3>Contact</h3>
				</>
				);
				}
	}
}
