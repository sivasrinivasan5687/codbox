import Lock from "icons/solid/Lock";
import Currency from "icons/solid/Currency";
import Compare from "icons/solid-mono/Compare";
import CloudNetwork2 from "icons/solid/CloudNetwork2";

const services = [
	{
		id: 1,
		Icon: CloudNetwork2,
		title: "Global Freight Management",
		description: "Ensure timely, cost-effective delivery across sea, air, and land.",
	},
	{
		id: 2,
		Icon: Currency,
		title: "Multi-Currency Support",
		description: "Transact globally with real-time currency exchange and invoicing tools.",
	},
	{
		id: 3,
		Icon: Lock,
		title: "Trade Financing",
		description: "Get access to export credits, insurance, and working capital.",
	},
	{
		id: 4,
		Icon: Compare,
		title: "Compliance & Documentation",
		description: "Let us handle customs, certificates, and all regulatory processes.",
	},
];

export default function Services38() {
  return (
		<div className="row gx-0 gy-10 gy-md-13 gy-lg-0 mb-16 mb-md-18 align-items-center">
			<div className="col-lg-6 position-relative">
				<div className="p-9 pe-0 p-xxl-11 pe-xxl-0">
					<div
						className="shape bg-gray position-absolute d-block"
						style={{ top: "0", left: "0", width: "89%", height: "100%", zIndex: 0 }}
					/>

					<figure className="position-relative">
						<img src="/img/ex6.png" srcSet="/img/ex6.png 2x" alt="" />
					</figure>

					{/* <div className="div position-absolute d-none d-md-block" style={{ top: "15%", right: "-7%", zIndex: 2 }}>
            <figure className="shadow-lg rounded">
              <img src="/img/photos/stat1.jpg" srcSet="/img/photos/stat1@2x.jpg 2x" alt="" />
            </figure>
          </div> */}

					{/* <div className="div position-absolute d-none d-md-block" style={{ bottom: "15%", right: "-7%", zIndex: 2 }}>
            <figure className="shadow-lg rounded">
              <img src="/img/photos/stat2.jpg" srcSet="/img/photos/stat2@2x.jpg 2x" alt="" />
            </figure>
          </div> */}
				</div>
			</div>

			<div className="col-lg-5 ms-auto">
				<h2 className="fs-16 text-uppercase text-primary mb-3">Our Features</h2>
				<h2 className="display-2 mb-8">Tailored Trade Solutions to Help You Scale Globally</h2>

				<div className="row gy-6">
					{services.map(({ id, title, description, Icon }) => (
						<div className="col-md-6 col-lg-12 col-xl-6" key={id}>
							<div className="d-flex flex-row">
								<div>
									<Icon className="icon-svg-sm solid-mono text-primary me-4" />
								</div>

								<div>
									<h4 className="mb-1">{title}</h4>
									<p className="mb-0">{description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
