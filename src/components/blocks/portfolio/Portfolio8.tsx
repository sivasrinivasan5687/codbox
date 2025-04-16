import Link from "next/link";
import Image from "next/image";
// CUSTOM DATA
import { portfolioList4, portfolioList5 } from "data/portfolio";

interface Portfolio8Props {
	products: boolean;
}
export default function Portfolio8({ products = false }: Portfolio8Props) {
	let data = products ? portfolioList4 : portfolioList5;
	return (
		<section className="wrapper bg-light">
			<div className="container py-14 py-md-17">
				<div className="row mb-8 text-center">
					<div className="col-lg-9 col-xl-8 col-xxl-7 mx-auto">
						<h2 className="fs-16 text-uppercase text-primary mb-3">Frozen Foods</h2>
						{/* <h3 className="display-4">Check out some of our awesome projects with creative ideas and great design.</h3> */}
					</div>
				</div>

				<div className="grid grid-view projects-masonry">
					<div className="row gx-md-8 gy-10 gy-md-13 isotope">
						{data.map(({ id, image, title, category, description }) => (
							<div className="project item col-md-6 col-xl-4 product " key={id}>
								<figure className="lift rounded mb-6">
									<Link href={`/product/${id}-${products ? "products" : "frozenfoods"}`}>
										<Image
											src={`/img/${products ? "products" : "frozenfoods"}/${image}.png`}
											alt={title}
											width={1300}
											height={1132}
											className="w-100 h-auto"
										/>
									</Link>
								</figure>

								<div className="project-details d-flex justify-content-center flex-column">
									<div className="post-header">
										{/* <div className={`post-category mb-2 text-${color}`}>{category}</div> */}
										<h2 className="post-title h3">{title}</h2>
										<p title={description}>{description.slice(0, 125)}...</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
