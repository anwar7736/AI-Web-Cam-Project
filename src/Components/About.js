import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
export default class About extends React.Component{
	constructor({match}){
		super()
		this.state = {
			id : match.params.id,
			name : match.params.name,
		}
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
					<h3>About</h3>
					<p>ID : {this.state.id}</p>
					<p>Name : {this.state.name}</p>
				</>
				);
				}
		
	}
}
