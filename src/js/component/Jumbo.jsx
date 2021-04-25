import React from "react";
import PropTypes from "prop-types";
import { Container, Jumbotron, Button } from "react-bootstrap";

export function Jumbo({ title, description, buttonText }) {
	return (
		<Container>
			<Jumbotron className="jumbotron-container">
				<h1 className="jumbotron-title">{title}</h1>
				<p className="text-justify jumbotron-text">{description}</p>
				<p>
					<Button variant="primary" className="jumbotron-btn-text">
						{buttonText}
					</Button>
				</p>
			</Jumbotron>
		</Container>
	);
}

//Definición de los Props
Jumbo.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonText: PropTypes.string
};
