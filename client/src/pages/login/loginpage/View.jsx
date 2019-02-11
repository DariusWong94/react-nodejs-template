import React from 'react';
import { Message, Form, Button, Input, Header, Segment, Container, Image, Icon } from 'semantic-ui-react';
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

import MediaQuery from 'react-responsive'; 
import background from 'images/background-image.png';
import logo from 'images/logo.png';

import FormR from './FormR';
const style = {
  ccenter: {
    top: '20%',
	left: '32%',
    width: '35%',
  },
  mcenter: {
    top: '30%',
    width: '90%',
	left: '5%',
  },
  scenter: {
    top: '3%',
    width: '48%',
	left: '25%',
  },
  ocenter: {
    top: '5%',
    width: '42%',
	left: '28%',
  },
   ipadcenter: {
    top: '25%',
    width: '50%',
	left: '24%',
  },
  background: {
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  },
};

const View = props => (
   <Container fluid style={style.background}>
	<MediaQuery minDeviceWidth={1025}>
		<Segment compact raised style={style.ccenter} textAlign="center">
			<FormR 
			isValid ={props.isValid}
			onLogin={props.onLogin}
			username={props.username}
			password={props.password}
			onHandleChange={props.onHandleChange}/>
		</Segment>
	</MediaQuery>
	<MediaQuery minDeviceWidth={801} maxDeviceWidth={1024}>
		<Segment compact raised style={style.ipadcenter} textAlign="center">
			<FormR 
			isValid ={props.isValid}
			onLogin={props.onLogin}
			username={props.username}
			password={props.password}
			onHandleChange={props.onHandleChange}/>
		</Segment>
	</MediaQuery>
	<MediaQuery minDeviceWidth={641} maxDeviceWidth={800}>
		<Segment compact raised style={style.ocenter} textAlign="center">
			<FormR 
			isValid ={props.isValid}
			onLogin={props.onLogin}
			username={props.username}
			password={props.password}
			onHandleChange={props.onHandleChange}/>
		</Segment>
	</MediaQuery>
	<MediaQuery minDeviceWidth={481} maxDeviceWidth={640}>
		<Segment compact raised style={style.scenter} textAlign="center">
			<FormR 
			isValid ={props.isValid}
			onLogin={props.onLogin}
			username={props.username}
			password={props.password}
			onHandleChange={props.onHandleChange}/>
		</Segment>
	</MediaQuery>
	<MediaQuery maxDeviceWidth={480}>
		<Segment compact raised style={style.mcenter} textAlign="center">
			<FormR 
			isValid ={props.isValid}
			onLogin={props.onLogin}
			username={props.username}
			password={props.password}
			onHandleChange={props.onHandleChange}/>
		</Segment>
	</MediaQuery>
  </Container>
);

export default View;
