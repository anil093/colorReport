import React from 'react';
import { Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
function Header() {
	return (
		<Nav activeKey="/">
			<Nav.Item>
				<Link to="/" style={{ paddingRight: 25 }}>
					Form
				</Link>
			</Nav.Item>
			<Nav.Item>
				<Link to="/report">Report</Link>
			</Nav.Item>
		</Nav>
	);
}

export default Header;
