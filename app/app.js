import React from 'react';
import ReactDom from 'react-dom';
import List from './components/list';
import Header from './components/header';
import Footer from './components/footer';
import { IndexRoute, Router, Route, Link } from 'react-router';
import Dashboard from './pages/dashboard';
import AddProject from './pages/addproject';

let App =  React.createClass({
	render() {
		return (
			<section className="content">
				{ this.props.children }
			</section>
		);
	}
});

ReactDom.render((
	<Router>
		<Route path='/' component={App}>
			<IndexRoute component={Dashboard} />
			<Route path='add-project' component={AddProject} />
		</Route>
	</Router>),
	document.getElementById('main'));
