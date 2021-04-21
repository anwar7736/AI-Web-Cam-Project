import React, {Component, Fragment} from 'react';


class Validation extends React.Component{
	constructor(){
		super()
		this.state = {
			name : '',
			email : '',
			phone : '',
		}
	}
	onChange=(e)=>{
		this.setState({[e.target.name] : e.target.value})
		if(e.target.name == 'name')
		{
			if(e.target.value=='')
			{
				this.setState({name : 'This field is required!'})
			}
			else if(!(/^([a-zA-Z])*$/).test(e.target.value))
			{
				this.setState({name : 'Invalid name format!'})
			}
		}
		if(e.target.name == 'email')
		{
			if(e.target.value=='')
			{
				this.setState({email : 'This field is required!'})
			}
			else if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/).test(e.target.value))
			{
				this.setState({email : 'Invalid email format!'})
			}
		}
		if(e.target.name == 'phone')
		{
			if(e.target.value=='')
			{
				this.setState({phone : 'This field is required!'})
			}
			else if(!Number(e.target.value))
			{
				this.setState({phone : 'Invalid phone format!'})
			}
			else if(e.target.value.length < 11)
			{
				this.setState({phone : 'Phone number is too short!'})
			}
		}
	}
	onSubmit=(e)=>{
		e.preventDefault();
		if(this.state.name!='' && this.state.email!='' && this.state.phone!='')
		{
			alert('Submitted');
		}
	}
	render(){
		return(
				<Fragment>
					<h3>React Form Validation</h3>
					<p>Name :  {this.state.name}</p>
					<p>Email : {this.state.email}</p>
					<p>Phone : {this.state.phone}</p>
					<form onSubmit={this.onSubmit}>
						<input onChange={this.onChange} type="text" name="name" placeholder="Enter Name..."/><br/><br/>
						<input onChange={this.onChange} type="text" name="email" placeholder="Enter Email..."/><br/><br/>
						<input onChange={this.onChange} type="text" name="phone" placeholder="Enter Phone..."/><br/><br/>
						<input type="submit" value="Save"/>
					</form>
				</Fragment>
			);
	}
}
export default Validation;