import React from 'react';
import { Link } from 'react-router';
import getEnv from '../code-parser/getenv';

export default React.createClass({

	renderProjectList() {
		return this.props.projects.map((project, index)=> {
			return (
				<Link to={`/project/${project.name}`} key={ index } className="project-status">
					{`${project.name}: ${getEnv(project.name, project.filePath)}`}
				</Link>
			);
		});
	},

	render() {
		return (
			<div className="project-list">
				{this.renderProjectList()}
			</div>
		);
	}
});
