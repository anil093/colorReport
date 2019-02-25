import React, { Component } from 'react';
// import { BroswerRouter as Router, Route } from 'react-router-dom';
import ColorReport from './Components/ColorReport';
import Header from './Components/layout/Header';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Report from './Components/layout/Report';
class App extends Component {
	render() {
		return (
			<Router>
				<div className="container ">
					<Header />
					<Route exact path="/" component={ColorReport} />
					<Route exact path="/report" component={Report} />
				</div>
			</Router>
		);
	}
}

export default App;
