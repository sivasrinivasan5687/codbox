export default function About37() {
	return (
		<div className="row gx-0 gy-10 gy-md-13 gy-lg-0 mb-16 mb-md-18 align-items-center">
			<div className="col-lg-6 order-lg-2 ms-auto position-relative">
				<div className="p-9 ps-0 p-xxl-11 ps-xxl-0">
					<div
						className="shape bg-gray position-absolute d-block"
						style={{ top: "0", left: "0", width: "89%", height: "100%", zIndex: 0 }}
					/>

					<figure className="position-relative">
						<img src="/img/ex7.png" srcSet="/img/ex7.png 2x" alt="" />
					</figure>

					<div className="div position-absolute d-none d-md-block" style={{ bottom: "15%", left: "-7%", zIndex: 2 }}>
						<figure className="shadow-lg rounded">
							<img style={{ width: "60%" }} src="/img/extra/e3.png" srcSet="/img/extra/e3.png" alt="" />
						</figure>
					</div>
				</div>
			</div>

			<div className="col-lg-5 position-relative">
				<img
					style={{ top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", opacity: "0.2" }}
					className="position-absolute"
					src="img/extra/e6.png"
					alt=""
				/>
				<h2 className="fs-16 text-uppercase  mb-3 ev-text-primary">Why Choose Us?</h2>
				<h2 className="display-2 mb-7">Your End-to-End Global Trade Partner</h2>

				<div className="accordion accordion-wrapper" id="accordionExample">
					<div className="card plain accordion-item">
						<div className="card-header" id="headingOne">
							<button
								className="accordion-button"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								Real-Time Tracking
							</button>
						</div>

						<div
							id="collapseOne"
							className="accordion-collapse collapse show"
							aria-labelledby="headingOne"
							data-bs-parent="#accordionExample"
						>
							<div className="card-body">
								<p>Monitor every shipment with detailed, live updates.</p>
							</div>
						</div>
					</div>

					<div className="card plain accordion-item">
						<div className="card-header" id="headingTwo">
							<button
								className="collapsed"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								Custom Clearance Experts
							</button>
						</div>

						<div
							id="collapseTwo"
							className="accordion-collapse collapse"
							aria-labelledby="headingTwo"
							data-bs-parent="#accordionExample"
						>
							<div className="card-body">
								<p>Navigate border procedures and compliance without delays.</p>
							</div>
						</div>
					</div>

					<div className="card plain accordion-item">
						<div className="card-header" id="headingThree">
							<button
								className="collapsed"
								data-bs-toggle="collapse"
								data-bs-target="#collapseThree"
								aria-expanded="false"
								aria-controls="collapseThree"
							>
								Data-Driven Insights
							</button>
						</div>

						<div
							id="collapseThree"
							className="accordion-collapse collapse"
							aria-labelledby="headingThree"
							data-bs-parent="#accordionExample"
						>
							<div className="card-body">
								<p>Access reports and analytics to improve logistics efficiency.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
