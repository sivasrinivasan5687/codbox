import { About34 } from "components/blocks/about";
import { Process1 } from "components/blocks/process";
import { PageTransition } from "components/PageTransition";
import React from "react";

const page = () => {
	return (
		<PageTransition>
			<About34 />

			<Process1 />
		</PageTransition>
	);
};

export default page;
