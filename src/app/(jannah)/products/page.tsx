"use client";
import { Footer4 } from "components/blocks/footer";
import NavbarOne from "components/blocks/navbar/navbar-1";
import { Portfolio5 } from "components/blocks/portfolio";
import Breadcrumb from "components/reuseable/Breadcrumb";
import BreadCrumb from "components/reuseable/breadcrumb/BreadCrumb";
import Link from "next/link";
import React from "react";

const page = () => {
	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "Contact", url: "#" },
	];
	return (
		<>
			<header className="wrapper ">
				<NavbarOne
					language
					logoAlt="EVIANSINTL-LOGO.webp"
					navClassName="navbar navbar-expand-lg center-nav navbar-dark navbar-bg-dark bg-nav"
					button={
						<Link href="/contact" className="btn btn-sm btn-primary rounded">
							Contact
						</Link>
					}
				/>
			</header>
			<BreadCrumb links={breadcrumb} title="products" />
			<Portfolio5 />
			<Footer4 />
		</>
	);
};

export default page;
