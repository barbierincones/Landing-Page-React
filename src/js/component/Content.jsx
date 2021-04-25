import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Jumbo } from "./Jumbo.jsx";
import { Cards } from "./Cards.jsx";

export function Content() {
	return (
		<React.Fragment>
			<Jumbo
				title={"A Warm Welcome!"}
				description={
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit neque a blandit dictum. Suspendisse potenti. Curabitur iaculis nibh urna, id pellentesque velit rutrum ut. Pellentesque vel quam magna. Nullam tincidunt neque at velit tincidunt, vel scelerisque mi convallis."
				}
				buttonText={"Call to action!"}
			/>
			<Container>
				<Row>
					<Col md={3} xs={12} className="text-center">
						<Cards
							title={"Card title"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit neque a blandit dictum."
							}
							buttonText={"Find out More!"}
						/>
					</Col>
					<Col md={3} xs={12} className="text-center">
						<Cards
							title={"Card title"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit neque a blandit dictum."
							}
							buttonText={"Find out More!"}
						/>
					</Col>
					<Col md={3} xs={12} className="text-center">
						<Cards
							title={"Card title"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit neque a blandit dictum."
							}
							buttonText={"Find out More!"}
						/>
					</Col>
					<Col md={3} xs={12} className="text-center">
						<Cards
							title={"Card title"}
							description={
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit neque a blandit dictum."
							}
							buttonText={"Find out More!"}
						/>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}
