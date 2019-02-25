import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
export class ColorReport extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			number: '',
			color: ''
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	valdiate = () => {
		let isError = false;
		const errors = {
			phoneNumberError: ''
			// favColorError
		};
		if (this.state.number > 10) {
			isError = true;
			errors.phoneNumberError = 'Phone Number should be excepting 10 digits';
		}
		this.setState({
			...this.state,
			...errors
		});
		return isError;
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		// const err = this.validate();

		// if (!err) {
		// 	// clear form
		// 	this.setState({
		// 		email: '',
		// 		number: '',
		// 		color: ''
		// 	});
		if (window.localStorage.getItem('reports')) {
			// @Todo: get localstorage value, pars it to array, push the new object and update localstorage
			let reports = JSON.parse(window.localStorage.getItem('reports'));
			reports.push(this.state);
			window.localStorage.setItem('reports', JSON.stringify(reports));
		} else {
			// @Todo: Create localstorage item reports, parse data to json  and add item.
			const reports = [];
			reports.push(this.state);
			window.localStorage.setItem('reports', JSON.stringify(reports));
			// update route
		}
	};

	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" name="email" placeholder="Enter email" onChange={this.onChange} />
					<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="number"
						name="number"
						placeholder="Enter Phone Number"
						validate={this.validate}
						errorText={this.state.phoneNumberError}
					/>
				</Form.Group>
				<Form.Group controlId="formBasicPassword">
					<Form.Label>Favorite Color</Form.Label>
					<Form.Control
						type="text"
						name="color"
						placeholder="Your Favourite Color"
						onChange={this.onChange}
						errorText={this.state.favColorError}
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		);
	}
}

export default ColorReport;
