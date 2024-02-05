"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Bookmark, Heart, MessageSquare, MoreVertical, Share2 } from "lucide-react";
import { useState } from "react";
import { useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreDropdown } from "@/app/MoreDropdown";

export function PostFooter({ likes, comments }: { likes: number; comments: number }) {
	let numberFormatter = Intl.NumberFormat("en", { notation: "compact" });

	const [like, animateLike] = useAnimate();
	const [save, animateSave] = useAnimate();
	const [liked, setLiked] = useState(false);
	const [saved, setSaved] = useState(false);

	return (
		<>
			<section className="flex items-center">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant={"link"}
							size={"icon"}
							ref={like}
							onClick={() => {
								setLiked(!liked);
								if (!liked)
									animateLike(
										"svg",
										{ fillOpacity: 1, scale: [0.9, 1.0, 1.1, 1.0] },
										{ duration: 0.2, delay: 0.1, ease: "easeOut" }
									);
								else
									animateLike(
										"svg",
										{ fillOpacity: 0, scale: [1.0] },
										{ duration: 0.2, delay: 0.1, ease: "easeOut" }
									);
							}}
						>
							<Heart
								strokeWidth={2.5}
								className={cn(
									liked
										? "hover:!fill-indigo-400 fill-indigo-400 stroke-indigo-400"
										: "",
									"hover:text-indigo-400"
								)}
							/>
						</Button>
					</TooltipTrigger>
					<TooltipContent>Like</TooltipContent>
				</Tooltip>
				<span className="text-lg mr-2">
					{numberFormatter.format(liked ? likes + 1 : likes)}
				</span>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant={"link"} size={"icon"} className="hover:text-indigo-400">
							<MessageSquare strokeWidth={2.5} />
						</Button>
					</TooltipTrigger>
					<TooltipContent>Comment</TooltipContent>
				</Tooltip>
				<span className="text-lg mr-2">{numberFormatter.format(comments)}</span>
			</section>
			<section className="flex items-center">
				<Tooltip>
					<TooltipTrigger asChild>
						<Button variant={"link"} size={"icon"} className="hover:text-indigo-400">
							<Share2 strokeWidth={2.5} />
						</Button>
					</TooltipTrigger>
					<TooltipContent>Share</TooltipContent>
				</Tooltip>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant={"link"}
							size={"icon"}
							ref={save}
							onClick={() => {
								setSaved(!saved);
								if (!saved)
									animateSave(
										"svg",
										{ fillOpacity: 1, scale: [0.9, 1.0, 1.1, 1.0] },
										{ duration: 0.2, delay: 0.1, ease: "easeOut" }
									);
								else
									animateSave(
										"svg",
										{ fillOpacity: 0, scale: [1.0] },
										{ duration: 0.2, delay: 0.1, ease: "easeOut" }
									);
							}}
						>
							<Bookmark
								strokeWidth={2.5}
								className={cn(
									saved ? "hover:!fill-indigo-400 fill-white" : "",
									"hover:text-indigo-400"
								)}
							/>
						</Button>
					</TooltipTrigger>
					<TooltipContent>Save</TooltipContent>
				</Tooltip>
				<DropdownMenu>
					<Tooltip>
						<DropdownMenuTrigger asChild>
							<TooltipTrigger asChild>
								<Button
									variant={"link"}
									size={"icon"}
									className="hover:text-indigo-400"
								>
									<MoreVertical strokeWidth={2.5} />
								</Button>
							</TooltipTrigger>
						</DropdownMenuTrigger>
						<TooltipContent>More</TooltipContent>
					</Tooltip>
					<MoreDropdown />
				</DropdownMenu>
			</section>
		</>
	);
}
