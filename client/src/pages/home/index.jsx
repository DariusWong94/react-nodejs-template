import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Route, Switch } from 'react-router-dom';

import View from './View';

@observer
class HomePage extends Component {

	constructor(props) {
		super(props);
		console.log('Application Loaded!');
	}

	render() {
		return <View />;
	}
}

export default HomePage;