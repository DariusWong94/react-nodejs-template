import React from 'react';
import { Message, Form, Button, Input, Header, Image, Icon } from 'semantic-ui-react';
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

import logo from 'images/logo.png';

const style = {
  input: {
    marginBottom: '10px',
  },
  logo: {
	  width: '70%',
  },
};

const FormR = props => (
      <Form>
        <Header><Image style={style.logo} src={logo} /></Header>
        <Divider />
		
		<Message negative hidden={props.isValid}>
          <Message.Header>Login failed!</Message.Header>
          <p>Please check your login details and try again.</p>
        </Message>
        
		<Input
          style={style.input}
          icon="user"
          iconPosition="left"
          type="text"
          fluid
          placeholder="Username"
          value={props.username}
          onChange={(_e, { value }) => { props.onHandleChange('username', value); }}
        />

        <Input
          style={style.input}
          icon="lock"
          iconPosition="left"
          type="password"
          fluid
          placeholder="Password"
          value={props.password}
          onChange={(_e, { value }) => { props.onHandleChange('password', value); }}
        />
		
        <Button
          style={style.input}
		  type='submit'
          primary
          loading={props.isLoading}
          disabled={props.isLoading}
          floated="right"
          onClick={props.onLogin}
        >
          Login
        </Button>
      </Form>
);

export default FormR;
