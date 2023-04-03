import React from "react";
import "./loginp.css";
import { NavLink, Outlet } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import aos from "aos";
import "aos/dist/aos.css";

export default function LoginPage() {

	return (
		<section className="login">
			<Container>
			<Row className="loginNav">
				<Button className="loginNavItem">
					<NavLink to="/login/signin">Sign in</NavLink>
				</Button>
				<Button className="loginNavItem">
					<NavLink to="/login/signup">Sign up</NavLink>
				</Button>
			</Row>
			</Container>
			<Outlet />
		</section>

	);
}
