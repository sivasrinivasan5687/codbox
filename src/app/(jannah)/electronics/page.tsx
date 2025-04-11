import { Footer4 } from 'components/blocks/footer'
import NavbarOne from 'components/blocks/navbar/navbar-1'
import { Portfolio5 } from 'components/blocks/portfolio'
import { electronics } from 'data/electronics'
import Link from 'next/link'
import React from 'react'
import Project from "../../(projects)/projects-3/page"

const page = () => {
  return (
		<>
			<Portfolio5 forward={false} data={electronics} />

			{/* <Project/> */}


		</>
	);
}

export default page