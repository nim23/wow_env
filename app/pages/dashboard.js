import React from 'react';
import List from '../components/list';
import Header from '../components/header';
import Footer from '../components/footer';
import projects from '../db/projects';

export default React.createClass({

	renderList() {
		if (projects.getProjects().length) {
			return (
				<List />
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
				<button className="btn btn-primary">
					{`Add Project`}
				</button>
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
