import React from 'react';
import {PutiConsumer} from './context';
export default function Puti (props) {
  return (
    <>
    	<p>
    	<PutiConsumer>
    		{
    			msg=>{
    				return msg;
    			}
    		}
    	</PutiConsumer>
    	</p>
    </>
  );
}
