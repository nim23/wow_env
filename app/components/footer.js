import React from 'react';

export default React.createClass({
	render() {
		return (
			<footer className="toolbar toolbar-footer">
				<div className="toolbar-actions">
					{this.props.children}
				</div>
			</footer>
		);
	}
});
