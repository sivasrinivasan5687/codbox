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
			<BreadCrumb links={breadcrumb} title="Commodity" />
			<Blog2 />
			<Footer4 />
		</>
	);
}

export default page