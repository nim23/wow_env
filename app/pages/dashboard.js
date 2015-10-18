import React from 'react';
import ProjectsList from '../components/projectslist';
import Header from '../components/header';
import Footer from '../components/footer';
import projects from '../db/projects';
import { Link } from 'react-router';

export default React.createClass({

	renderList() {
		if (projects.getProjects().length) {
			return (
				<ProjectsList projects={ projects.getProjects() } />
			);
		}
		return (
			<div className='dashboard-message'>
				{`No project's added yet.`}
			</div>
		);
	},

	renderFooter() {
		return (
			<Footer>
				<Link to={'/add-project'} className="btn btn-primary">
					{`Add Project`}
				</Link>
			</Footer>
		);
	},

	render() {
		return (
			<section className='content'>
				<Header title={`Dashboard`} />
				{this.renderList()}
				{this.renderFooter()}
			</section>
		);
	}
});
