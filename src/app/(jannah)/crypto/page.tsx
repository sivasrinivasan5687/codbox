import { About34 } from "components/blocks/about";
import { Process1 } from "components/blocks/process";
import { PageTransition } from "components/PageTransition";
import BreadCrumb from "components/reuseable/breadcrumb/BreadCrumb";
import React from "react";

const page = () => {
	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "Crypto", url: "#" },
	];
	return (
		<PageTransition>
			<BreadCrumb	 links={breadcrumb} title="Crypto" />
			<About34 />

			<Process1 />
		</PageTransition>
	);
};

export default page;
