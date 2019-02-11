import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from 'images/logo.png';
import { ToastContainer } from 'react-toastify';
import ProfilePicture from './ProfilePicture';

const TopMenu = props => (
  <Menu secondary style={{ background: '#DDDDDD'  }} fixed="top">
    <Menu.Item header style={{ height: '50px', background: 'white', marginLeft: '0px' }} >
      <Image src={logo} style={{ height: '86px', marginTop: '20px' }} />
    </Menu.Item>
    <Menu.Menu position="right">
		<ProfilePicture/>
    </Menu.Menu>
    <ToastContainer />
  </Menu>
);

export default TopMenu;
