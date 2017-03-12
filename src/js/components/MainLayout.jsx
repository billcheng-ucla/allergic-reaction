import React from 'react';
import axios from 'axios';
import { Router, Route, Link } from 'react-router';
import moment from 'moment';
import 'moment-timezone';

import Header from './Header.jsx';
import Form from './Form.jsx';
import NavBar from './NavBar.jsx'
import PromotionsContainer from './PromotionsContainer.jsx'
import RestaurantsContainer from './RestaurantsContainer.jsx'


export default class MainLayout extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			value: '', 
			restaurant: '',
			ssr: null
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUserInput = this.handleUserInput.bind(this);
	}


	handleUserInput(e) {
		this.setState({
			value: e
		})
	}

	handleSubmit(e) {
		e.preventDefault();
		this.setState({
			restaurant: this.state.value
		})
		axios.get(`https://gs7qteix17.execute-api.us-east-1.amazonaws.com/dev/promotionsForUser`)
			 .then( response => {
			 	console.log(response.data)
			 	this.setState({
			 		ssr: response.data
			 	})
			 })
			 .catch( err => {
				console.log(err)
			}) 
	}

	componentWillMount() {

	}



	render() {
		console.log(this.state)
		return (
			<div className="container">
				<Header />

				<Form 
				  onSubmit={this.handleSubmit}
				  text={this.state.value}
				  onUserInput={this.handleUserInput}
				/> 
				
				<br /> <br /> <br />
				<div className='col-md-12'>
					<RestaurantsContainer html={this.state.ssr} /> 
				</div>

			</div>
		)
	}
}