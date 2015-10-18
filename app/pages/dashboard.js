import React from 'react';
import List from '../components/list';
import Header from '../components/header';
import Footer from '../components/footer';

export default React.createClass({

	renderList() {
		return <List />;
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
