import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
export default class About extends Component{
	constructor({match}){
		super()
		this.state = {
			id   : match.params.id,
			name : match.params.name,
		}
	}
	render(){

		return(
			<>	
				<h1 className="text">About</h1>
				<p>{this.state.id}</p>
				<p>{this.state.name}</p>

			</>
			);
	}
}
	
