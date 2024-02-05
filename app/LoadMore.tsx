"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getPosts } from "./api";
import { Loader2 } from "lucide-react";

let page = 2;

export function LoadMore({ total }: { total: number }) {
	const { ref, inView } = useInView({});
	const [posts, setPosts] = useState<JSX.Element[]>([]);

	useEffect(() => {
		if (inView) {
			setTimeout(
				() =>
					getPosts(page).then((resp) => {
						setPosts([...posts, ...resp.posts]);
						page++;
					}),
				1500
			);
		}
	}, [inView]);

	return (
		<>
			{posts}
			{posts.length < total ? (
				<div ref={ref} className="col-[2] flex justify-center">
					<Loader2 className="animate-spin text-muted-foreground" />
				</div>
			) : (
				<div className="col-[2] flex justify-center text-muted-foreground">
					No more posts to load.
				</div>
			)}
		</>
	);
}
