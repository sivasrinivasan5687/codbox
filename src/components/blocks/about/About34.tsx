import Link from "next/link";
// CUSTOM DATA
import { timelines } from "data/demo-33";

export default function About34() {
  return (
		<section className="wrapper bg-light">
			<div className="container">
				<div className="row gx-md-8 gx-xl-12 gy-10 align-items-center mt-lg-1 mb-16 mb-md-18">
					<div className="col-md-8 col-lg-6 mx-auto">
						<div className="img-mask mask-4 px-xxl-5">
							<img src="/img/c.png" srcSet="/img/c.png 2x" alt="" />
						</div>
					</div>

					<div className="col-lg-6">
						<h2 className="display-2 mb-3">A Shift Towards Crypto Solutions</h2>

						<p className="lead fs-24">LIMITATIONS OF TRADITIONAL BANKING SYSTEMS</p>

						<p>
							In the evolving landscape of global commerce, the traditional banking system faces significant challenges in
							adapting to the demands of contemporary business transactions.
						</p>

						<p>
							As enterprises strive to remain competitive and anticipate shifts in consumer behavior, the need for agile and
							efficient financial services has surged dramatically.
						</p>
						<p>
							This increasing demand highlights several critical shortcomings of conventional banking practices, which often
							fail to meet the expectations of modern businesses.
						</p>

						<Link href="#" className="btn btn-primary btn-icon btn-icon-end mt-2">
							Learn More <i className="uil uil-arrow-up-right" />
						</Link>
					</div>
				</div>

				{/* <div className="row gx-md-8 gx-xl-12 gy-10">
          <div className="col-lg-5 mx-auto">
            <h2 className="display-2 mb-3">My experiences</h2>

            <p className="lead fs-24 pe-xxl-8">
              I've had the pleasure to work with companies 🏢 across a variety of industries 🏛️ I'm always interested in
              new ✨ and exciting adventures 🧨
            </p>

            <Link href="#" className="btn btn-primary btn-icon btn-icon-end mt-2">
              Download Resume <i className="uil uil-arrow-up-right" />
            </Link>
          </div>

          <div className="col-lg-7">
            <ul className="timeline">
              {timelines.map(({ description, duration, id, title }) => (
                <li className="timeline-item" key={id}>
                  <div className="timeline-info meta fs-14">{duration}</div>
                  <div className="timeline-marker" />

                  <div className="timeline-content">
                    <h3 className="timeline-title">{title}</h3>
                    <p>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
			</div>
		</section>
	);
}
