"use client";
import { Blog6 } from "components/blocks/blog";
import { Footer4 } from "components/blocks/footer";
import NavbarOne from "components/blocks/navbar/navbar-1";
import { BlogCard2 } from "components/reuseable/blog-cards";
import BreadCrumb from "components/reuseable/breadcrumb/BreadCrumb";
import { blogList } from "data/demo-11";
import { portfolioList4, portfolioList5 } from "data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
type Product = {
	id: string | number;
	// add other product properties as needed
};

type DataType = {
	[key: string]: Product[];
};

interface ParamsType {
	id?: string;
}
const page = () => {
	let data:object = {
		products: portfolioList4,
		commodity: blogList,
		frozenfoods: portfolioList5,
	};
	
	const params = useParams() as ParamsType;
	
	const id = params?.id?.split("-")[0] || "0";
	const category = params?.id?.split("-")[1] || "product";
	const product = data[category]?.find((prod:string) => prod?.id?.toString() === id);

	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: category, url: "#" },
	];
	
  console.log(product);
	return (
		<div>
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
			<BreadCrumb title={category} links={breadcrumb} />
			<BlogCard2
				link="#"
				category={category}
				title={product.title}
				description={product.description}
				cardTop={
					<figure className="card-img-top overlay overlay-1 hover-scale">
						<a className="link-dark" href="#">
							{/* <Image width={100} height={100} src={`/img/${category}/${product.image}.png`} alt="blog" className="" />
							 */}
							<img
								style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
								src={`/img/${category}/${product.image}.png`}
								alt=""
							/>
							<span className="bg" />
						</a>

						{/* <figcaption>
						  <h5 className="from-top mb-0">Read More</h5>
						</figcaption> */}
					</figure>
				}
			/>
			<Footer4 />
		</div>
	);
};

export default page;
