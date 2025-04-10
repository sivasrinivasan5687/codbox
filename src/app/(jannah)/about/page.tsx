import { Footer4 } from "components/blocks/footer";
import Navbar from "components/blocks/navbar/navbar-1";
import BreadCrumb from "components/reuseable/breadcrumb/BreadCrumb";
import Link from "next/link";
import React, { Fragment } from "react";

const page = () => {
	const breadcrumb = [
		{ id: 1, title: "Home", url: "/" },
		{ id: 2, title: "About", url: "#" },
	];
	return (
		<Fragment>
		
			{/* <section className="wrapper bg-light">
				<div className="container py-4 py-md-6">
					<div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
						<div className="col-md-8 col-lg-6 col-xl-5 order-lg-2 position-relative">
							<div
								className="shape bg-soft-primary rounded-circle rellax w-20 h-20"
								data-rellax-speed="1"
								style={{ top: "-2rem", right: "-1.9rem" }}
							></div>
							<figure className="rounded">
								<img src="/img/photos/about7.jpg" alt="" />
							</figure>
						</div>
						<div className="col-lg-6">
							<h2 className="display-4 mb-3">More about us</h2>
							<p className="lead fs-lg">
								NOORUL JANNAH GOODS WHOLESALERS LLC has established itself as a prominent and influential participant in the
								global goods wholesalers export arena, maintaining a robust presence across the Middle East, Far East,
								Southeast Asia, Africa, and South American nations.
							</p>
							<p className="mb-6">
								Our unwavering commitment lies in the continuous advancement of the General and agricultural commodities
								sector, Frozen Foods, Frozen meat and Petroleum by products .
							</p>
						</div>
					</div>
				</div>
			</section> */}
			<BreadCrumb links={breadcrumb} title="About" />
			<section className="wrapper bg-light">
				<div className="container py-14">
					<div className="row gx-md-8 gx-xl-12 gy-6 align-items-center">
						<div className="col-md-8 col-lg-6 order-lg-2 mx-auto">
							<div className="img-mask mask-2">
								<img src="/img/photos/about30.jpg" alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							<h2 className="display-5 mb-3">More about us</h2>
							<p className="lead fs-lg">LIMITATIONS OF TRADITIONAL BANKING SYSTEMS</p>
							<p>
								In the evolving landscape of global commerce, the traditional banking system faces significant challenges in
								adapting to the demands of contemporary business transactions.
							</p>
							<p>
								As enterprises strive to remain competitive and anticipate shifts in consumer behavior, the need for agile
								and efficient financial services has surged dramatically. This increasing demand highlights several critical
								shortcomings of conventional banking practices, which often fail to meet the expectations of modern
								businesses.
							</p>
							<a href="#" className="btn btn-primary rounded-pill mt-2">
								Learn More
							</a>
						</div>
					</div>
					
				</div>
			</section>
			{/* <section className="wrapper bg-light">
				<div className="container">
					<div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center">
						<div className="col-lg-6 position-relative">
							<div
								className="btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
								style={{ top: "50%", left: "50%", transform: " translate(-50%, -50%)", width: "170px", height: "170px" }}
							>
								<h3 className="text-white mb-1 mt-n2">
									<span className="counter counter-lg">20+</span>
								</h3>
								<p>Year Experience</p>
							</div>
							<div className="row  gy-5 align-items-center">
								<div className="col-md-6">
									<div className="row gx-md-5 gy-5">
										<div className="col-md-10 offset-md-2">
											<figure className="rounded">
												<img src="/img/photos/ab1.jpg" alt="" />
											</figure>
										</div>
										<div className="col-md-12">
											<figure className="rounded">
												<img src="/img/photos/ab2.jpg" alt="" />
											</figure>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<figure className="rounded">
										<img src="img/photos/ab3.jpg" alt="" />
									</figure>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<img src="/img/icons/lineal/handshake.svg" className="svg-inject icon-svg icon-svg-md mb-4" alt="" />
							<h3 className="display-5 mb-5">
								We are a creative company that focuses on establishing long-term relationships with customers.
							</h3>
							<p className="mb-7">
								Rice, a dietary staple in many regions worldwide, occupies a pivotal role in NOORUL JANNAH GOODS WHOLESALERS
								export portfolio. We take immense pride in contributing to the global battle against malnutrition through the
								export of our high-caliber rice.
							</p>
							<p>
								With a focus on competitive pricing and nutritional significance,Noorul Jannah has emerged as a prominent
								name in the global rice market. Throughout the years, we have continually evolved and refined our approach,
								carving out a distinctive niche within the industry. eavours.eavours.
							</p>
							<div className="row counter-wrapper gy-6">
								<div className="col-md-4">
									<h3 className="counter text-primary">7518</h3>
									<p>Completed Projects</p>
								</div>
								<div className="col-md-4">
									<h3 className="counter text-primary">3472</h3>
									<p>Satisfied Customers</p>
								</div>
								<div className="col-md-4">
									<h3 className="counter text-primary">2184</h3>
									<p>Expert Employees</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}
		</Fragment>
	);
};

export default page;
