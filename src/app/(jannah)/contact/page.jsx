import { Contact10 } from 'components/blocks/contact'
import { Footer4 } from 'components/blocks/footer';
import NavbarOne from 'components/blocks/navbar/navbar-1';
import BreadCrumb from 'components/reuseable/breadcrumb/BreadCrumb';
import Link from 'next/link';
import React from 'react'

const page = () => {
	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "Contact Us", url: "#" },
	];
  return (
		<>
			
			<BreadCrumb links={breadcrumb} title="Contact Us" />
			<Contact10 />
		
		</>
	);
}

export default page