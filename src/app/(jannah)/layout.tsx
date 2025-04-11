"use client";
import { Footer4 } from "components/blocks/footer";
import NavbarOne from "components/blocks/navbar/navbar-1";
import { PageTransition } from "components/PageTransition";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
				<NavbarOne
					language
					logoAlt="noorul-logo"
					navClassName="navbar navbar-expand-lg center-nav navbar-dark bg-white bg-nav"
					button={
						<Link href="/contact" className="btn btn-sm btn-primary rounded">
							Contact
						</Link>
					}
				/>
				<main>{children}</main>
				<Footer4 />
		</div>
	);
}
