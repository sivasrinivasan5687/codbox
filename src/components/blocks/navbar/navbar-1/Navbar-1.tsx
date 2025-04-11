"use client";

import { Fragment, ReactElement, useRef } from "react";
import clsx from "clsx";
// -------- CUSTOM HOOKS -------- //
import useSticky from "hooks/useSticky";
import useNestedDropdown from "hooks/useNestedDropdown";
// -------- CUSTOM COMPONENTS -------- //
import NextLink from "components/reuseable/links/NextLink";
import SocialLinks from "components/reuseable/SocialLinks";
// LOCAL CUSTOM COMPONENTS
import Info from "../components/Info";
import Search from "../components/search";
import Signin from "../components/signin";
import Signup from "../components/signup";
import MiniCart from "../components/mini-cart";
import HeaderRight from "../components/header-right";
import FancyHeader from "../components/fancy-header";
import BlogNavItem from "../components/blog-nav-item";
import DemosNavItem from "../components/demos-nav-item";
import PagesNavItem from "../components/pages-nav-item";
import BlocksNavItem from "../components/blocks-nav-item";
import ProjectsNavItem from "../components/projects-nav-item";
import DocumentationNavItem from "../components/documentation-nav-item";

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  fancy,
  button,
  logoAlt,
  cart = false,
  info = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  navOtherClass = "navbar-other w-100 d-flex ms-auto",
  navClassName = "navbar navbar-expand-lg center-nav transparent navbar-light bg-dark"
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? "EVIANSINTL-LOGO" : logoAlt ?? "EVIANSINTL-LOGO";

  // all main header contents
  const headerContent = (
		<Fragment>
			<div className="navbar-brand w-100">
				<NextLink
					href="/"
					title={
						<img
							style={{ width: 120, height: 80, objectFit: "contain",  paddingBottom: 10 }}
							alt="logo"
							src={`/img/EVIANSINTL-LOGO.webp`}
							srcSet={`/img/EVIANSINTL-LOGO.webp`}
						/>
					}
				/>
			</div>

			<div
				id="offcanvas-nav"
				data-bs-scroll="true"
				className="navbar-collapse offcanvas offcanvas-nav offcanvas-start bg-info"
			>
				<div className="offcanvas-header d-lg-none">
					<h3 className="text-white fs-30 mb-0">EVIANSINTL</h3>
					<button
						type="button"
						aria-label="Close"
						data-bs-dismiss="offcanvas"
						className="btn-close btn-close-white ms-auto"
					/>
				</div>

				<div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
					<ul className="navbar-nav ">
						{/* ===================== demos nav item ===================== */}
						{/* <DemosNavItem /> */}
						<li className="nav-item ">
							<NextLink className="nav-link text-dark" href={"/"} title={"Home"} />
						</li>
						<li className="nav-item ">
							<NextLink className="nav-link text-dark" href={"/about"} title={"About"} />
						</li>
						<li className="nav-item ">
							<NextLink className="nav-link text-dark" href={"/products"} title={"Products"} />
						</li>
						<li className="nav-item ">
							<NextLink className="nav-link text-dark" href={"/electronics"} title={"Electronics"} />
						</li>
						<li className="nav-item ">
							<NextLink className="nav-link text-dark" href={"/frozenfoods"} title={"Frozen foods"} />
						</li>
						<li className="nav-item ">
							<NextLink className="nav-link text-dark" href={"/crypto"} title={"Crypto"} />
						</li>
						<li className="nav-item ">
							<NextLink className="nav-link text-dark" href={"/commodity"} title={"Commodity"} />
						</li>
						{/* <li className="nav-item ">
							<NextLink className="nav-link" href={"/contact"} title={"Contact us"} />
						</li> */}
						{/* ===================== projects nav item  ===================== */}
						{/* <ProjectsNavItem /> */}

						{/*  ===================== pages nav item  ===================== */}
						{/* <PagesNavItem /> */}

						{/* ===================== blog nav item ===================== */}
						{/* <BlogNavItem /> */}

						{/* ===================== blocks nav item ===================== */}
						{/* <BlocksNavItem /> */}

						{/* ===================== documentation nav item ===================== */}
						{/* <DocumentationNavItem /> */}
					</ul>

					{/* ============= show contact info in the small device sidebar ============= */}
					<div className="offcanvas-footer  d-lg-none">
						<div>
							<NextLink title=" info@eviansintl.io" className="link-inverse" href="mailto:first.last@email.com" />
							<br />
							<NextLink href="tel:+1v9084558007" title="+1 (908) 455-8007" />
							<br />
							<SocialLinks />
						</div>
					</div>
				</div>
			</div>

			{/* ============= right side header content ============= */}
			<HeaderRight
				cart={cart}
				info={info}
				button={button}
				search={search}
				social={social}
				// language={language}
				navOtherClass={navOtherClass}
			/>
		</Fragment>
	);

  return (
    <Fragment>
      {stickyBox ? <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} /> : null}

      <nav ref={navbarRef} className={clsx(navClassName, { "navbar-clone fixed navbar-stick": sticky })}>
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info ? <Info /> : null}

      {/* ============= show search box ============= */}
      {search ? <Search /> : null}

      {/* ============= cart sidebar ============= */}
      {cart ? <MiniCart /> : null}
    </Fragment>
  );
}
