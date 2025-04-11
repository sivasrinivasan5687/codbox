import { Footer4 } from "components/blocks/footer";
import NavbarOne from "components/blocks/navbar/navbar-1";
import { Portfolio5 } from "components/blocks/portfolio";
import { electronics } from "data/electronics";
import Link from "next/link";
import React from "react";
import Project from "../../(projects)/projects-3/page";
import { PageTransition } from "components/PageTransition";

const page = () => {
	return (
		<>
			<PageTransition>
				<Portfolio5 forward={false} data={electronics} />
			</PageTransition>

			{/* <Project/> */}
		</>
	);
};

export default page;
