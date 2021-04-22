import {React, useState, Fragment} from 'react';
import {Consumer} from './context';
export default function Functional(props){

	return(
			<Fragment>
				<Consumer>
					{
						msg=>{
							return msg;
						}
					}
				</Consumer>
			</Fragment>

		);
}