"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";

import NavbarOne from "components/blocks/navbar/navbar-1";
import { BlogCard2 } from "components/reuseable/blog-cards";
import BreadCrumb from "components/reuseable/breadcrumb/BreadCrumb";
import { Footer4 } from "components/blocks/footer";

import { blogList } from "data/demo-11";
import { portfolioList4, portfolioList5 } from "data/portfolio";

// ✅ Define Product type
type Product = {
	id: string | number;
	title: string;
	description: string;
	image: string;
	// Add more fields as needed
};

// ✅ Define category-wise product data
const data: Record<string, Product[]> = {
	products: portfolioList4,
	commodity: blogList,
	frozenfoods: portfolioList5,
};

const Page = () => {
	const params = useParams();
	const paramId = (params?.id as string) || "0-product";

	const [idPart, category] = paramId.split("-");
	const id = idPart || "0";
	const selectedCategory = category || "products";

	const productList = data[selectedCategory] || [];
	const product = productList.find((prod) => prod.id.toString() === id);

	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: selectedCategory, url: "#" },
	];

	if (!product) {
		return (
			<div className="text-center p-10">
				<h2>Product not found</h2>
				<Link href="/" className="btn btn-primary mt-4">
					Go Home
				</Link>
			</div>
		);
	}

	return (
		<div>
			

			<BreadCrumb title={selectedCategory} links={breadcrumb} />

			<BlogCard2
				link="#"
				category={selectedCategory}
				title={product.title}
				description={product.description}
				cardTop={
					<figure className="card-img-top overlay overlay-1 hover-scale">
						<a className="link-dark" href="#">
							<img
								style={{
									width: "100%",
									maxHeight: "500px",
									objectFit: "cover",
								}}
								src={`/img/${selectedCategory}/${product.image}.png`}
								alt={product.title}
							/>
							<span className="bg" />
						</a>
					</figure>
				}
			/>

			
		</div>
	);
};

export default Page;
