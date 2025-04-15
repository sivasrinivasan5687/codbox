import NextLink from "components/reuseable/links/NextLink";
import { ProcessList1 } from "components/reuseable/process-list";
// CUSTOM DATA
import { processList1 } from "data/process";

export default function Process1() {
  return (
		<div className="row gx-md-8 gx-xl-12 gy-10 mb-14 mb-md-18 align-items-center px-12">
			<div className="col-lg-6 order-lg-2">
				{processList1.map((item) => (
					<ProcessList1 shadow {...item} key={item.no} />
				))}
			</div>

			<div className="col-lg-6">
				{/* <h2 className="fs-16 text-uppercase text-muted mb-3">Our Strategy</h2> */}
				<h3 className="display-4 mb-5">Here are 4 working steps to organize our business projects.</h3>

				<p>
					he advent of digital technology,globalisation and the growing inefficiencies of the conventional brick-and-mortar
					banking system created a need for an integrated approach to business transactions. As countries across the globe
					increasingly embraced the principle of free trade,the attendant rise in the outflow and exchange of financial
					products,goods, services and jobs necessitated the need for an all-encompassing digitalized payment system.
				</p>

				<p className="mb-6">
					Hence, the introduction ofblockchain technology in 2009 signaled a paradigm shift that has completely
					revolutionalised ommerce and industry across the world.
				</p>

				<NextLink href="#" title="Learn More" className="btn ev-bg-primary text-white rounded-pill mb-0" />
			</div>
		</div>
	);
}
