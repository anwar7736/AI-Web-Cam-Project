import React, {Component} from 'react';
import {useState} from 'react';

var Hook = Hook=()=>{
	const [student, setName] = useState({
		name : 'Anwar'
	})
	function onClick() {
	setName({name: 'Hossain'})
}
	return(
			<>
				<h1>React Hook for Functional Component</h1>
				<p>{student.name}</p>
				<button onClick={onClick}>Click!</button>
			</>
		);
}
export default Hook;