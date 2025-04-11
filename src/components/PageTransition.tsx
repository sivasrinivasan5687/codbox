// components/PageTransition.tsx
"use client";

import {  motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
	children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => (
		<motion.div
			initial={{ opacity: 0, y: 20, scale: 0.98 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: -10, scale: 0.98 }}
			transition={{
				duration: 0.5,
				ease: [0.43, 0.13, 0.23, 0.96], // smooth bezier
			}}
		>
			{children}
		</motion.div>
);
