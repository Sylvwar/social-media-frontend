"use client";

import { AnimatedDiv } from "@/app/motion";

export function PostAnimatedCard({
	index,
	children,
}: {
	index: number;
	children: React.ReactNode;
}) {
	return (
		<AnimatedDiv
			variants={{
				hidden: { opacity: 0, position: "relative", top: 10 },
				visible: { opacity: 1, position: "relative", top: 0 },
			}}
			initial="hidden"
			animate="visible"
			transition={{ delay: index * 0.2, ease: "easeInOut", duration: 0.6 }}
			viewport={{ amount: 0 }}
			className="h-fit"
		>
			{children}
		</AnimatedDiv>
	);
}
