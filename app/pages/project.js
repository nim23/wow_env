import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import List from '../components/list';
import projects from '../db/projects';
import getEnv from '../code-parser/getEnv';
import { Link } from 'react-router';

export default React.createClass({

	renderEnvList() {
		let projectName = this.props.params.projectName,
			filePath = projects.getFilePath(projectName),
			currentEnviroment = getEnv(projectName, filePath);

		return (
			<List project={ this.props.params.projectName }
				selected= { currentEnviroment }
				filePath = { filePath } />
		);
	},

	renderFooter() {
		return (
			<Footer>
				<Link to={'/add-project'} className="btn btn-primary">
					{`Edit Project`}
				</Link>
			</Footer>
		);
	},

	render() {
		return (
			<section className='content'>
				<Header title={`${this.props.params.projectName}`} />
				{this.renderEnvList()}
			</section>
		);
	}
});
