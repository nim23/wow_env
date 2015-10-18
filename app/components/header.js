import React from 'react';
import { IndexLink } from 'react-router';

export default React.createClass({
	render() {
		return (
			<header className="toolbar toolbar-header">
				<h1 className="title">
					{ this.props.title }
				</h1>
				<div className="toolbar-actions">
					<IndexLink to='/' className="btn btn-default">
						<span className="icon icon-home"></span>
					</IndexLink>
				</div>
			</header>
		);
	}
});
