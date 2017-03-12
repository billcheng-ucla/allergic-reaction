import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router';


export default class NavBar extends React.Component {

	render() {
		return (
		<div className='row'>
			<IndexLink to="/" activeClassName="active">
            Home
			</IndexLink>
			<Link to="promotions" activeClassName="active">
            Promotions
			</Link>
		</div>
			)
	}
}