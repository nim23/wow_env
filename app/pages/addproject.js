import React from 'react';
import List from '../components/list';
import Header from '../components/header';
import Footer from '../components/footer';
import projects from '../db/projects';
import { Link } from 'react-router';

export default React.createClass({

	renderFooter() {
		return (
			<Footer>
				<button className="btn btn-primary pull-right">
					{`Save`}
				</button>
			</Footer>
		);
	},

	render() {
		return (
			<section className='content'>
				<Header title={`Add Project`} />
				{this.renderFooter()}
			</section>
		);
	}
});
