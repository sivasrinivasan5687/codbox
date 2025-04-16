"use client";
import { Footer4 } from "components/blocks/footer";
import NavbarOne from "components/blocks/navbar/navbar-1";
import { Portfolio5, Portfolio8 } from "components/blocks/portfolio";
import { PageTransition } from "components/PageTransition";
import Breadcrumb from "components/reuseable/Breadcrumb";
import BreadCrumb from "components/reuseable/breadcrumb/BreadCrumb";
import { portfolioList4 } from "data/portfolio";
import Link from "next/link";
import React from "react";

const page = () => {
	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "Products", url: "#" },
	];
	return (
		<>
			<PageTransition>
				<BreadCrumb links={breadcrumb} title="Products" />
				{/* <Portfolio5 forward={true} data={portfolioList4} /> */}
				<Portfolio8 products={true} />
			</PageTransition>
		</>
	);
};

export default page;
