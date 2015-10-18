import React from 'react';
import List from '../components/list';
import Header from '../components/header';
import Footer from '../components/footer';
import projects from '../db/projects';
import { Link } from 'react-router';
const FILE_PATH_PLACEHOLDER = '/full/path/to/local.js/file';

export default React.createClass({

	getInitialState() {
		return {
			name: '',
			filePath: '',
		};
	},

	handleSubmit(e) {
		projects.addProject(this.state.name, this.state.filePath);
		e.preventDefault();
	},

	onNameChange(e) {
		this.setState({ name: e.target.value });
	},

	onFilePathChange(e) {
		this.setState({ filePath: e.target.value });
	},

	renderForm() {
		return (
			<section className='form'>
				<div className="form-group">
					<label>Project Name:</label>
					<input type="text" className="form-control" placeholder="Project Name" value={ this.state.name } onChange={ this.onNameChange } />
				</div>
				<div className="form-group">
					<label>File Path:</label>
					<input type="text" className="form-control" placeholder={FILE_PATH_PLACEHOLDER} value={ this.state.filePath } onChange={ this.onFilePathChange } />
				</div>
			</section>
		);
	},

	renderFooter() {
		let isDisabled = !(this.state.name && this.state.filePath);
		return (
			<Footer>
				<button type="submit" className="btn btn-primary pull-right" disabled={isDisabled}>
					{`Save`}
				</button>
			</Footer>
		);
	},

	render() {
		return (
				<div>
					<Header title={`Add Project`} />
					<form className="add-project-form" onSubmit={ this.handleSubmit }>
						{ this.renderForm() }
						{ this.renderFooter() }
					</form>
				</div>
		);
	}
});
