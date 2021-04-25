import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

export function Cards({ title, description, buttonText }) {
	return (
		<React.Fragment>
			<Card className="my-2">
				<Card.Img
					variant="top"
					src={"https://via.placeholder.com/500x325"}
				/>
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					<Card.Text>{description}</Card.Text>
				</Card.Body>
				<Card.Footer className="text-center">
					<Button variant="primary">{buttonText}</Button>
				</Card.Footer>
			</Card>
		</React.Fragment>
	);
}

//Definición de los Props
Cards.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	buttonText: PropTypes.string
};
