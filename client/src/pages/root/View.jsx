import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import AuthenticationChecker from './AuthenticationChecker';

import LeftMenu from './LeftMenu';
import TopMenu from './TopMenu';

import Routes from './Routes';

const View = props => (
  <BrowserRouter>
    <div>
	{/*Put this to view login page */}
		<AuthenticationChecker>  
			<LeftMenu
			  activeItem={props.activeItem}
			  activeMenu={props.activeMenu}
			/>
			<TopMenu/>
			<div style={{ marginLeft: '230px', marginTop: '70px' }}>
			  <Routes />
			</div>
        </AuthenticationChecker> 
    {/* Put this to view login page */}
    </div>
  </BrowserRouter>
);

export default View;