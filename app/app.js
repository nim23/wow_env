import React from 'react';
import ReactDom from 'react-dom';
import List from './components/list';
import Header from './components/header';
import Footer from './components/footer';

let App = React.createClass({
	render() {
		return (
			<section className='content'>
				<Header />
				<List />
				<Footer />
			</section>
		);
	}
});

ReactDom.render(<App/>, document.getElementById('main'));
