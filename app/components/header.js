import React from 'react';

export default React.createClass({
	render() {
		return (
			<header className="toolbar toolbar-header">
				<h1 className="title">{ this.props.title }</h1>
				<div className="toolbar-actions">
					<button className="btn btn-default">
						<span className="icon icon-home"></span>
					</button>
				</div>
			</header>
		);
	}
});
