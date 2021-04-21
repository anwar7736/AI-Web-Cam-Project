import React, {Component} from 'react';
import axios from 'axios';
export default class About extends React.Component{
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
		const data = this.state.lists
		const listItem2 = data.map((item2)=>{
			return <li>{item2.region}</li>
		})
		return(
				<>
					<h3>404 page not found!</h3>
				</>
				);
	}
}
