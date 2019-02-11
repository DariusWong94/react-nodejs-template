import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter, Redirect } from 'react-router-dom';

import AuthenticationService from 'services/AuthenticationService';
import View from './View';

@observer
class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      isValid: true,
      isLoading: false,
      isOTPValid: true,
      isSessionValid: true,
      isOTP: 'hidden',
      OTP: '',
      username: "",
      password: "",
      override: false,
    };
    this.onLogin = this.onLogin.bind(this);
    this.overrideSession = this.overrideSession.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }
  onHandleChange(name, value) {
    // For OTP.
    this.setState({ [name]: value });
  }

  overrideSession() {
    this.setState({ override: true }, this.onLogin);
  }

  onLogin() {

    // Stores the value of the states into const obj so that it can be passed as a object to the store then the backend.
    const obj = {
      username: this.state.username.toLowerCase(),
      password: this.state.password,
      //OTP: this.state.OTP,
     // override: this.state.override,
    };

    // Setting the state to true so that the loading animation can be displayed as by default false and is being hidden.
    this.setState({ isLoading: true });

    // Conditional statement to validate if prior session from current user exist, if not continue.
	if (this.state.username== "" && this.state.password== "" || this.state.username== "" || this.state.password== "")
	{
		this.setState({
				isValid: false,
				isSessionValid: true,
			  });
	}

	else
	{
		AuthenticationService.Login(obj)
		  .then(() => {
				if(this.state.isLoading === true)
				{
					this.state.isLoading = false;
				}
				// once the credentials has been confirmed then user will be redirected to home page.
				this.props.history.replace('/');
		  })
		  .catch((error) => {
			if (error.response.status === 400) {
			  this.setState({
				isValid: false,
				isSessionValid: true,
				isOTPValid: true,
				isOTP: 'hidden',
			  });
			}
			if (error.response.status === 404) {
			  this.setState({
				isValid: true,
				isSessionValid: true,
				isOTPValid: false,
				isOTP: 'text',
			  });
			}
			if (error.response.status === 401) {
			  this.setState({
				isValid: true,
				isSessionValid: false,
				isOTPValid: true,
				isOTP: 'hidden',
			  });
			}
			this.setState({
			  isLoading: false,
			  override: false,
			});
		  });
	  }
  }
  render() {
    const props = {
		isValid: this.state.isValid,
		isLoading: this.state.isLoading,
		onLogin: this.onLogin,
		onHandleChange: this.onHandleChange,
		overrideSession: this.overrideSession,
		username: this.state.username,
		password: this.state.password,
    };

    return <View {...props} />;
  }
}

export default withRouter(LoginPage);
