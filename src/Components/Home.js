import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
export default class Home extends Component{
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
			return <option>{e.name}</option>
		})
		return(
			<>	<div class="col-md-3">
				{this.state.selected}
				<select name="selected" onChange={this.onChange} class="form-control" value={this.state.selected}>
					{item}
				</select>
				</div>
			</>
			);
	}
}
	
