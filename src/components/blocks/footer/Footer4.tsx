import SocialLinks from "components/reuseable/SocialLinks";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import footerNav, { commodity, footerProducts } from "data/footer";

export default function Footer4() {
	return (
		<footer style={{ backgroundColor: "white" }}>
			<div className="container py-13 py-md-15">
				<div className="row gy-6 gy-lg-0">
					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<img
								style={{ width: 200 }}
								className="mb-4"
								src="/img/EVIANSINTL-LOGO.webp"
								srcSet="/img/EVIANSINTL-LOGO.webp 2x"
								alt="Evian Intl Logo"
							/>
							<p>
								<i className="uil uil-location-pin-alt"></i>
								63 WINLATON ROAD, BROMLEY ,ENGLAND BR1 5PU.
								<br />
								+1 (908) 455-8007
							</p>
							<p>
								<i className="uil uil-envelope"></i> info@eviansintl.io
							</p>

							<SocialLinks className="nav social" />
						</div>
					</div>

					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<h4 className="widget-title mb-3">Products</h4>
							{footerProducts.map((prod) => (
								<div key={prod.title}>
									<NextLink title={prod.title} href={prod.url} className="link-body" />
									<br />
								</div>
							))}
						</div>
					</div>

					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<h4 className="widget-title mb-3">Frozen Foods</h4>
							<ul className="list-unstyled text-reset mb-0">
								{footerNav.map(({ title, url }) => (
									<li key={title}>
										<NextLink title={title} href={url} />
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="col-md-12 col-lg-3">
						<div className="widget">
							<h4 className="widget-title mb-3">Commodity</h4>
							{commodity.map((comm) => (
								<div key={comm.title}>
									<NextLink title={comm.title} href={comm.url} className="link-body" />
									<br />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
