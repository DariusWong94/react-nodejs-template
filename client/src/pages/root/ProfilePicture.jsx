import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react'
import { observer } from 'mobx-react';
import AuthenticationService from 'services/AuthenticationService';
import defaultprofilepicture from 'images/defaultprofilepicture.jpg';
import Stores from 'stores'
import { withRouter } from 'react-router-dom';

@observer
class ProfilePicture extends Component {
	constructor(props) {
		super(props);
		this.onLogoutClick = this.onLogoutClick.bind(this);
		this.state = {
			username:"",
			roles:"",
		}
	}
	
	onLogoutClick() {
		AuthenticationService.Logout()
		  .then(() => {
				this.props.history.replace('/login');
			});
			
	}
	componentDidMount(){
		Stores.UsersStore.GetUserById().then(()=>{
			/* console.log(Stores.UsersStore.state.User);
			console.log("Username: " + Stores.UsersStore.state.username);
			console.log("Role: " + Stores.UsersStore.state.roles) */
			this.setState({
				username: Stores.UsersStore.state.username.toString(),
				roles: Stores.UsersStore.state.roles
			});
		});

	}

  render() {
    return (
		<div style={{marginTop: '8px' }}>
			<Dropdown 
				trigger={
					<div style={{ marginBottom: '-7px'}}>
						<span style={{ marginRight: '13px'}}>
							<Image size='mini' avatar src={defaultprofilepicture} />
							{this.state.username}
							</span>
					</div>
				} 
				pointing='top right' icon={null}>
				<Dropdown.Menu>
				  <Dropdown.Item text= 'Account' icon= 'user' />
				  <Dropdown.Item text= 'Settings' icon= 'settings' />
				  <Dropdown.Item text= 'Sign Out' icon= 'sign out' onClick={this.onLogoutClick} />
				</Dropdown.Menu>
			</Dropdown>
		</div>
    );
  }
}

export default withRouter(ProfilePicture);
