import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Stores from 'stores'
import RolesService from 'services/RolesService';
import AuthenticationService from 'services/AuthenticationService';

import View from './View';

@observer
class Root extends Component {
	constructor(props) {
		super(props);
		console.log('Application Loaded!');
		this.onButtonClick = this.onButtonClick.bind(this);
		this.state = {
			username: "",
			roles: "",
		}
	}
	
	componentDidMount() {
		if (AuthenticationService.IsAuthenticated) {
		//  ProfileService.GetPoints();
		RolesService.GetRoles();
		}
	  }
	onButtonClick(_e) {
		Stores.RootStore.ClearError();
	}
	render() {
		const props = {
			onButtonClick: this.onButtonClick,
			username: this.state.username,
			visible: this.state.visible,
			roles: RolesService.Roles,
			activeItem: Stores.RootStore.ActiveMenuItem,
		};
		return (<div>{<View {...props} />}</div>);
	}
}

export default Root;
