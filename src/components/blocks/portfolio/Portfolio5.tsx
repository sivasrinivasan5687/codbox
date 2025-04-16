"use client";
import clsx from "clsx";
// GLOBAL CUSTOM COMPONENTS
import LightBox from "components/LightBox";
// GLOBAL CUSTOM HOOKS
import useIsotope from "hooks/useIsotope";
// CUSTOM DATA
import { portfolioList4 } from "data/portfolio";
import NextLink from "components/reuseable/links/NextLink";
import Link from "next/link";
interface Portfolio5Props {
	data: any[];
	forward: boolean;
}

export default function Portfolio5({ data = portfolioList4, forward = false }: Portfolio5Props) {
	const { filterKey, handleFilterKeyChange } = useIsotope();

	const filterList = [
		{ id: 1, title: "All", value: "*" },
		{ id: 2, title: "Foods", value: ".foods" },
		{ id: 3, title: "Drinks", value: ".drinks" },
		{ id: 4, title: "Events", value: ".events" },
		{ id: 5, title: "Pastries", value: ".pastries" },
	];

	return (
		<section id="portfolio">
			<div className="wrapper bg-gray">
				<div className="container  py-6 text-center">
					{/* <div className="row">
						<div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto mb-8">
							<h2 className="display-5 mb-3">Products</h2>
							<p className="lead fs-lg">Photography is my passion and I love to turn ideas into beautiful things.</p>
						</div>
					</div> */}

					{/* USED FOR IMAGE LIGHTBOX */}
					<LightBox />

					<div className="grid grid-view projects-masonry">
						{/* <div className="isotope-filter filter mb-10">
              <ul>
                {filterList.map(({ id, title, value }) => (
                  <li key={id}>
                    <a
                      onClick={handleFilterKeyChange(value)}
                      className={clsx({ "filter-item": true, active: filterKey === value })}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

						<div className="row gx-md-6 gy-6 isotope">
							{data.map(({ category, id, image, title }) => (
								<div className={`project item col-md-6 col-xl-4 ${category}`} key={id}>
									<figure className="overlay overlay-1 rounded">
										<Link href={forward ? `/product/${id}-products` : "#"}>
											<img src={`/img/products/${image}.png`} alt={title} />
											<span className="bg" />
										</Link>

										<figcaption>
											<h5 className="from-top mb-0">
												{title}
												{/* <NextLink href={`/product/${id}-products`} title={title} /> */}
											</h5>
										</figcaption>
									</figure>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
