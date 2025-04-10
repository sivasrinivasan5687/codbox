import React from 'react'
import { Footer4 } from "components/blocks/footer";
import NavbarOne from "components/blocks/navbar/navbar-1";
import Link from "next/link";
import { Blog2 } from 'components/blocks/blog';
import BreadCrumb from 'components/reuseable/breadcrumb/BreadCrumb';

const page = () => {
	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "Commodity", url: "#" },
	];
  return (
		<>
			<BreadCrumb links={breadcrumb} title="Commodity" />
			<Blog2 />
		</>
	);
}

export default page