"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserData } from "@/app/data";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import moment from "moment";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCheck, UserPlus } from "lucide-react";
import { useState } from "react";

export default function UserHeader({
	user,
	date,
	posts,
}: {
	user: UserData;
	date: string;
	posts: number;
}) {
	let numberFormatter = Intl.NumberFormat("en", { notation: "compact" });

	const [followed, setFollowed] = useState(false);

	return (
		<header className="flex justify-between pt-2 px-2">
			<div className="flex w-full items-center gap-2">
				<Avatar className="w-8 h-8">
					<AvatarImage src={`${user.avatarURL}?u=${user.userId}`} alt="Avatar Image" />
					<AvatarFallback className="text-sm">
						{user.firstName?.at(0)}
						{user.lastName?.at(0)}
					</AvatarFallback>
				</Avatar>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Link href={""}>
							<h1 className="text-muted-foreground hover:text-indigo-400">
								{user.firstName} {user.lastName}
							</h1>
						</Link>
					</HoverCardTrigger>
					<HoverCardContent className="flex flex-col gap-2 w-min">
						<div className="flex items-center gap-2 w-fit">
							<Avatar className="w-8 h-8">
								<AvatarImage
									src={`${user.avatarURL}?u=${user.userId}`}
									alt="Avatar Image"
								/>
								<AvatarFallback>
									{user.firstName?.at(0)}
									{user.lastName?.at(0)}
								</AvatarFallback>
							</Avatar>
							<h1 className="w-fit text-nowrap">
								{user.firstName} {user.lastName}
							</h1>
							<span className="text-sm text-muted-foreground">@{user.username}</span>
						</div>
						<p className="text-muted-foreground line-clamp-3">{user.bio}</p>
						<div className="flex gap-4 text-nowrap">
							<span>
								{numberFormatter.format(posts)}
								<span className="text-muted-foreground"> posts</span>
							</span>
							<span>
								{numberFormatter.format(user.followers)}
								<span className="text-muted-foreground"> followers</span>
							</span>
						</div>
					</HoverCardContent>
				</HoverCard>
				<span className="text-muted-foreground">•</span>
				<span className="text-muted-foreground">{moment(date).fromNow()}</span>
			</div>
			{followed ? (
				<Button
					variant={"ghost"}
					size={"sm"}
					className="hover:bg-destructive text-muted-foreground"
					onClick={() => setFollowed(false)}
				>
					<UserCheck strokeWidth={2.5} className="h-4 w-4 mr-2" /> Following
				</Button>
			) : (
				<Button variant={"ghost"} size={"sm"} onClick={() => setFollowed(true)}>
					<UserPlus strokeWidth={2.5} className="h-4 w-4 mr-2" /> Follow
				</Button>
			)}
		</header>
	);
}
