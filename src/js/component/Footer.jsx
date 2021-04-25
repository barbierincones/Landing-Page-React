import React from "react";
import PropTypes from "prop-types";
import { Col, Container, Row } from "react-bootstrap";

export const Footer = ({ textFooter }) => {
	return (
		<React.Fragment>
			<Container fluid className="bg-dark footer mt-4">
				<Row>
					<Col xs={12} md={12} className="footer-text">
						{textFooter}
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
};

//Definición del Prop
Footer.propTypes = {
	textFooter: PropTypes.string
};
