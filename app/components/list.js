import React from 'react';
import changeEnv from '../code-parser/change-env';

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

	onClick(value) {
		changeEnv(value);
	},

	renderEnvList() {
		return this.state.environments.map((env)=> {
			return (
				<a className="env" onClick={ this.onClick.bind(this, env.value) }>
					{env.label}
				</a>
			);
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
