import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Menu, Image, Dropdown, Icon, Popup } from 'semantic-ui-react';

const style = {
  menu: {
    marginTop: '72px',
    background: '#00CED1',
    fontSize: '0.9em',
  },
  name: {
    marginLeft: '10px',
    fontSize: '1em',
  },
};

const LeftMenu = props => (

  <Menu vertical inverted fixed="left" style={style.menu}>

    <Menu.Item active={props.activeItem === 'Home'} as={Link} to="/">Home</Menu.Item>

    <Dropdown item text="test">
      <Dropdown.Menu>
        <Dropdown.Item active={props.activeItem === 'Home'} as={Link} to=""> Home</Dropdown.Item>
  
      </Dropdown.Menu>
    </Dropdown>
    
    <Menu.Item active={props.activeItem === 'Home'} as={Link} to="/">Home</Menu.Item>
  </Menu>
);

export default LeftMenu;
