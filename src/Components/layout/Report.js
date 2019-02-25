import React, { Component } from 'react';
class Report extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reports: this.setCount(JSON.parse(window.localStorage.getItem('reports')))
		};
	}
	setCount(data) {
		const colorData = {};
		data.forEach((element) => {
			if (!colorData[element.color.toUpperCase()]) {
				colorData[element.color.toUpperCase()] = 1;
			} else {
				colorData[element.color.toUpperCase()] = colorData[element.color.toUpperCase()] + 1;
			}
		});
		return colorData;
	}

	render() {
		return (
			<div>
				<h2>Here are my reports</h2>
				<table>
					<thead>
						<tr>
							<th>Color</th>

							<th> {''}Count</th>
						</tr>
					</thead>
					<tbody>
						{Object.keys(this.state.reports).map((key, index) => {
							return (
								<tr key={key}>
									<td>{key}</td>
									<br />
									<td>{this.state.reports[key]}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
export default Report;
