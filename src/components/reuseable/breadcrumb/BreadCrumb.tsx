"use client";
import React from "react";
import Breadcrumb from "../Breadcrumb";
import Link from "next/link";
import { useRouter } from "next/router";
interface BreadCrumbProps {
	className?: string;
	links?: { id: number; title: string; url: string }[];
	title?: string;
	backbutton?: boolean;
}
const BreadCrumb = ({ links, title = "Get in Touch", backbutton = false }: BreadCrumbProps) => {
	return (
		<div style={{ position: "relative" }} className="wrapper bg-soft-ash ev-text-primary">
			{backbutton && (
				<span className="text-white" style={{ position: "absolute", top: 40, left: 40 }}>
					<span>
						<i className="uil uil-arrow-left "></i> Back
					</span>
				</span>
			)}
			<div className="container pt-10 pb-10 pt-md-14 pb-md-10 text-center">
				<div className="row">
					<div className="col-sm-10 col-md-8 col-lg-6 col-xl-6 col-xxl-5 mx-auto">
						<h1 className="display-1 mb-3 ev-text-primary">{title}</h1>
						<Breadcrumb data={links} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default BreadCrumb;
