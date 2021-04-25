import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Menu = () => {
	return (
		<React.Fragment>
			<Navbar
				collapseOnSelect
				expand="lg"
				bg="dark"
				variant="dark"
				className="m-0 mx-auto"
				fixed="top">
				<Container>
					<Navbar.Brand>Star Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#link">About us</Nav.Link>
							<Nav.Link href="#home">Services</Nav.Link>
							<Nav.Link href="#link">Contact</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};
