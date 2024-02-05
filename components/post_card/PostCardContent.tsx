"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PostContent({ image }: { image: string }) {
	const [blur, setBlur] = useState("?blur=10");

	useEffect(() => {
		setTimeout(() => setBlur(""), 2000);
	}, []);

	return (
		<>
			<Image
				src={`${image}${blur}`}
				alt="Post Image"
				width={500}
				height={300}
				className="rounded-lg w-full aspect-video"
				unoptimized
				priority
			/>
		</>
	);
}
