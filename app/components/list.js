import React from 'react';
import RadioGroup from 'react-radio';
import changeEnv from '../code-parser/changeenv';

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
				label: 'Qa',
				value: 'qa'
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

	onChange(value) {
		changeEnv(value, this.props.filePath);
	},

	renderEnvList() {
		let environmentList = this.state.environments.map((env, index)=> {
			return (
				<div className="form-group" key={ index }>
					<input type="radio" value={ env.value } />
					{env.label}
				</div>);
		});

		return (
			<RadioGroup name="environments" value={this.props.selected} onChange={ this.onChange }>
				{ environmentList }
			</RadioGroup>
		);
	},

	render() {
		return (
			<div className="env-list">
				{ this.renderEnvList() }
			</div>
		);
	}
});
