import CountUp from "components/reuseable/CountUp";
import CloudGroup from "icons/solid-duo/CloudGroup";
import React from "react";
import ReplaceMe from "components/ReplaceMe";

export default function Hero35() {
	return (
		<div className="row gx-0 gy-10 gy-md-13 gy-lg-0 mb-16 mb-md-18 align-items-center position-relative bg">
			<img
				style={{ top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: "0.2" }}
				className="position-absolute"
				src="https://img.freepik.com/free-vector/digital-currency-inr-indian-rupee-coin-background-blur-style_1017-42533.jpg?t=st=1744372496~exp=1744376096~hmac=6f0b3fe22bbf3a56983f39c8ab164ab2737e7e3884fc16e2fa7a32c41550ea9b&w=1060"
				alt=""
			/>
			<img
				style={{ top: 0, right: 100, width: "250px", height: "250px", objectFit: "cover", zIndex: 2 }}
				className="position-absolute"
				src="/img/extra/e8.png"
				alt=""
			/>
			<div className="col-lg-6 ms-auto position-relative order-lg-2">
				<div className="p-9 ps-0 p-xxl-11 ps-xxl-0">
					<div
						className="shape bg-gray position-absolute d-block"
						style={{ top: "0", right: "0", width: "89%", height: "100%", zIndex: 0 }}
					/>

					<figure className="position-relative">
						<img
							style={{ maxHeight: 550, objectFit: "cover", width: "100%" }}
							src="/img/ex5.png"
							srcSet="img/ex5.png 2x"
							alt=""
						/>
					</figure>

					<div
						className="card shadow-lg position-absolute d-none d-md-block"
						style={{ bottom: "20%", left: "-8%", zIndex: 2 }}
					>
						<div className="card-body py-4 px-5">
							<div className="d-flex flex-row align-items-center">
								<div>
									<CloudGroup className="icon-svg-sm solid-mono text-primary me-3" />
								</div>

								<div>
									{/* <h3 className="counter fs-23 mb-0 text-nowrap">
										<CountUp end={1000} suffix="+" />
									</h3> */}
									{/* <p className="fs-15 lh-sm mb-0 text-nowrap"></p> */}
									<button className="btn ev-bg-primary text-white">Get started</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="col-lg-5 position-relative">
				{/* <img className="position-absolute"  style={{top:0,left:0 , width:"20%"}} src="/img/extra/e7.png" alt="" /> */}
				<h2 className="fs-16 text-uppercase ev-text-primary mb-3">EVIANSINTL</h2>

				<h1 className="display-1 fs-58 mb-5">Global Trade Made Simple</h1>
				<p className="lead fs-20 lh-sm mb-6 pe-md-10">
					Empowering your international business with seamless import-export solutions. From logistics to compliance — we
					take care of it all.
				</p>

				<ReplaceMe className="rotator-fade ev-text-primary ">
					Eviansintl Transaction ,Instant Exchange,Investment Banking
				</ReplaceMe>

				{/* <div className="row gy-3 gx-xl-8 mb-9">
					<div className="col-xl-6">
						<ul className="icon-list bullet-bg bullet-soft-primary mb-0">
							<li>
								<span>
									<i className="uil uil-check" />
								</span>
								<span>Secured Transactions</span>
							</li>

							<li className="mt-3">
								<span>
									<i className="uil uil-check" />
								</span>
								<span>Track Your Spending</span>
							</li>
						</ul>
					</div>

					<div className="col-xl-6">
						<ul className="icon-list bullet-bg bullet-soft-primary mb-0">
							<li>
								<span>
									<i className="uil uil-check" />
								</span>
								<span>Multiple Currencies</span>
							</li>

							<li className="mt-3">
								<span>
									<i className="uil uil-check" />
								</span>
								<span>Sync Between Devices</span>
							</li>
						</ul>
					</div>
				</div> */} 
				<br />
				<a
					href="#"
					className="btn btn-lg  btn-icon btn-icon-end rounded "
				>
					Explore Now <i className="uil uil-arrow-up-right" />
				</a>
			</div>
		</div>
	);
}
