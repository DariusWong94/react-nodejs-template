import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Modal, Header, Button } from 'semantic-ui-react';

import LoginPage from 'pages/login/loginpage';

import Stores from 'stores'
import AuthenticationService from 'services/AuthenticationService';

@observer
class AuthenticationChecker extends Component {
  constructor(props) {
    super(props);    
	this.onButtonClick = this.onButtonClick.bind(this);

    const { pathname, search } = this.props.location;

    const conflict = (search === '?conflict');
    this.state = { conflict };

    if (
      pathname === '/registration' ||
      pathname === '/forgetpassword' ||
      pathname === '/forgetpassword_2' ||
      pathname === '/forgetpassword_3'
    ) {
      return;
    }
	if (!AuthenticationService.IsAuthenticated) {
      this.props.history.replace('/login');
    }
  }
  
  onButtonClick() {
    this.setState({ conflict: false });
  }

  render() {
	if (AuthenticationService.IsAuthenticated) {
		return this.props.children;
    }
	return (
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </div>
    );
    
  }
}

export default withRouter(AuthenticationChecker);
