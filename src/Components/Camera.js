import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Webcam from "react-webcam";
import preview from '../preview.png';
import {FaCamera, FaFolder} from 'react-icons/fa';

export default class Camera extends Component{
	constructor(){
		    super()
			this.cameraRef = React.createRef();
			this.state = {
				capture : preview
			}
	}
	onCapture=()=>{

		let capturedPhoto = this.cameraRef.current.getScreenshot();
		this.setState({capture : capturedPhoto});
	}
	onSave=()=>{
		if(this.state.capture==preview){
			return ;
		}
		else{
		let a = document.createElement('a');
		a.href = this.state.capture;
		a.download='react-webcam.jpeg';
		a.click();
		}

	}
	render(){

		return(
			<Fragment>	
					<Container><hr/>
						<h3 className="m-3 text-danger">Artificial Intelligence React Web Cam Project</h3><hr/>
						<Row className="mt-5 p-5 bg-dark text-center">
							<Col className="p-2" lg={6} md={6} sm={12} >
								<Webcam
							        audio={false}
							        screenshotFormat="image/jpeg"
							        className="w-100"
							        ref={this.cameraRef}
						        />
								<button onClick={this.onCapture} className="btn btn-danger mt-3"><FaCamera/> Capture</button>
							</Col>
							<Col className="p-2" lg={6} md={6} sm={12} st>
								<img className="w-100" src={this.state.capture} />
								<button onClick={this.onSave}  className="btn btn-danger mt-3"><FaFolder/> Save</button>
							</Col>
						</Row>	
					</Container>

			</Fragment>

			);
	}
}
	
