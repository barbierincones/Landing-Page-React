import React from "react";
import { Menu } from "./Menu.jsx";
import { Content } from "./Content.jsx";
import { Footer } from "./Footer.jsx";

export function Home() {
	return (
		<React.Fragment>
			<Menu />
			<Content />
			<Footer textFooter={"Copywriter © Your Website 2021"} />
		</React.Fragment>
	);
}
