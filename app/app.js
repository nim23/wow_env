import React from 'react';
import ReactDom from 'react-dom';
import List from './components/list';
import Header from './components/header';
import Footer from './components/footer';
import { Router, Route, Link } from 'react-router';
import Dashboard from './pages/dashboard';

let App =  React.createClass({
	render() {
		return (
			<Router>
				<Route path="/" component={Dashboard}/>
			</Router>
		);
	}
});

ReactDom.render(<App/>, document.getElementById('main'));
