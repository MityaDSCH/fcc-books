'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Navbar from './components/navbar/navbar.jsx';

class App extends React.Component {
	render() {
		return (
			<div>
				<Navbar />
				<h1>Hello World!</h1>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
