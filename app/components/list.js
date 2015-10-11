import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
	getInitialState() {
		return {
			environments: [{
				label: 'Mock',
				value: 'mock'
			}, {
				label: 'Dev',
				value: 'dev'
			}, 
			{
				label: 'Uat',
				value: 'uat'
			}, {
				label: 'Test',
				value: 'test'
			}]
		};
	},

	renderEnvList() {
		return this.state.environments.map((env)=> {
			return (
				<div className="env">
					<label>{env.label}</label>
				</div>
			)
		});
	},

	render() {
		return (
			<div className="env-list">
				{this.renderEnvList()}
			</div>
		);
	}
});
