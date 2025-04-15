"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import NextLink from "components/reuseable/links/NextLink";
// GLOBAL CUSTOM HOOKS
import useIsotope from "hooks/useIsotope";
// CUSTOM DATA
import { filterItems, projectList } from "./data";
import { electronicslist } from "data/electronics";
import BreadCrumb from "components/reuseable/breadcrumb/BreadCrumb";

export default function ProjectsThree() {
	const { handleFilterKeyChange, filterKey } = useIsotope();
	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "Electronics", url: "#" },
	];
	return (
		<Fragment>
			{/* ========== header section ========== */}
			{/* <header className="wrapper bg-light">
        <Navbar
          language
          button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header> */}

			<main className="content-wrapper">
				{/* ========== title section ========== */}
				{/* <section className="wrapper bg-light">
					<div className="container pt-10 pt-md-14">
						<div className="row">
							<div className="col-lg-10 col-xxl-8">
								<h1 className="display-1 mb-0">Check out some of our awesome projects with creative ideas.</h1>
							</div>
						</div>
					</div>
				</section> */}
				<BreadCrumb links={breadcrumb} title="Electronics" />
				<section className="wrapper bg-light">
					<div className="container py-14 py-md-16">
						<div className="grid grid-view projects-masonry">
							{/* ========== filter section ========== */}
							<div className="isotope-filter filter mb-10">
								<p>Filter:</p>
								<ul>
									{filterItems.map(({ id, title, value }) => (
										<li key={id}>
											<a
												onClick={handleFilterKeyChange(value)}
												className={clsx({ "filter-item": true, active: value === filterKey })}
											>
												{title}
											</a>
										</li>
									))}
								</ul>
							</div>

							{/* ========== projects section ========== */}
							<div className="row gx-md-10 gy-10 gy-md-13 isotope">
								{electronicslist.map(({ id, image, title, category, color, link, type }) => (
									<div className={`project item col-md-6 ${type}`} key={id}>
										<Link href={link}>
											<figure className="lift rounded mb-6">
												<Image
													alt={title}
													src={`/img/${image.url}.png`}
													width={image.width}
													height={image.height}
													className="w-100 h-auto"
												/>
											</figure>
										</Link>

										<div className="project-details d-flex justify-content-center flex-column">
											<div className="post-header">
												<div className={`post-category text-line mb-3 text-${color}`}>{title}</div>
												{/* <h3 className="post-title">{title}</h3> */}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>
			</main>

			{/* ========== footer section ========== */}
			{/* <Footer8 /> */}
		</Fragment>
	);
}
