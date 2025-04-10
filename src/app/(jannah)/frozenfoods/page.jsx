import { Footer4 } from "components/blocks/footer";
import NavbarOne from "components/blocks/navbar/navbar-1";
import { Portfolio8 } from "components/blocks/portfolio";
import BreadCrumb from "components/reuseable/breadcrumb/BreadCrumb";
import Link from "next/link";
import React from "react";

const page = () => {
	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "Frozen Foods", url: "#" },
	];
	return (
		<>
			<NavbarOne
				language
				logoAlt="noorul-logo"
				navClassName="navbar navbar-expand-lg center-nav navbar-dark navbar-bg-dark bg-nav"
				button={
					<Link href="/contact" className="btn btn-sm btn-primary rounded">
						Contact
					</Link>
				}
			/>
			<BreadCrumb links={breadcrumb} title="Frozen Foods" />
			<Portfolio8 />
			<Footer4 />
		</>
	);
};

export default page;
