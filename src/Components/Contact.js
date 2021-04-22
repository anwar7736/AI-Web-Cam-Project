import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
export default class Contact extends Component{
	constructor(){
		super()
		this.state = {
			name : [],
			selected :'Bangladesh',

		}
	}
	componentDidMount(){
		axios.get('https://restcountries.eu/rest/v2/all')
		.then(response=>{
			this.setState({name : response.data})
		})
		.catch(error=>{
			alert('Something went wrong!')
		})
	}
	onChange=(e)=>{
		this.setState({[e.target.name]: e.target.value})
	}

	render(){
		const data = this.state.name
		const item = data.map((e)=>{
			return <li>{e.name}</li>
		})
		return(
			<>	<div class="col-md-3">
					<ol>
						{item}
					</ol>
				</div>
			</>
			);
	}
}
	
