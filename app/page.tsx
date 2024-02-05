import { LoadMore } from "./LoadMore";
import { getPosts } from "./api";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Bell, Bookmark, HomeIcon, Mail, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
	const resp = await getPosts(1);
	return (
		<div className="flex h-screen py-4 gap-8 m-auto justify-center">
			<nav className="flex flex-col gap-4 p-4">
				<Button variant={"link"} size={"default"} className="justify-start text-lg">
					<h1 className="text-2xl font-bold">Social Media</h1>
				</Button>
				<Button variant={"ghost"} size={"default"} className="justify-start text-lg">
					<HomeIcon className="h-5 w-5 mr-2" /> Home
				</Button>
				<Button variant={"ghost"} size={"default"} className="justify-between text-lg">
					<span className="flex items-center">
						<Bell className="h-5 w-5 mr-2" /> Notifications
					</span>
					<span className="ml-4 text-muted-foreground">12</span>
				</Button>
				<Button variant={"ghost"} size={"default"} className="justify-between text-lg">
					<span className="flex items-center">
						<Mail className="h-5 w-5 mr-2" /> Messages
					</span>
					<span className="ml-4 text-muted-foreground">3</span>
				</Button>
				<Button variant={"ghost"} size={"default"} className="justify-start text-lg">
					<Bookmark className="h-5 w-5 mr-2" /> Saved
				</Button>
			</nav>
			<section className="flex flex-col overflow-hidden items-center">
				<Tabs
					defaultValue="foryou"
					className="flex flex-col w-fit h-fit p-4 overflow-hidden"
				>
					<div className="flex gap-4">
						<TabsList className="w-fit">
							<TabsTrigger value="foryou">For you</TabsTrigger>
							<TabsTrigger value="following">Following</TabsTrigger>
						</TabsList>
						<div className="grow">
							<Input
								type="search"
								placeholder="Search posts by anything..."
								className=""
								suffix={
									<Button
										variant={"outline"}
										size={"icon"}
										className="border-none"
									>
										<SearchIcon />
									</Button>
								}
							/>
						</div>
					</div>
					<TabsContent
						value="foryou"
						className="flex flex-col w-fit h-fit gap-4 overflow-y-scroll no-scrollbar"
					>
						{resp.posts}
						<LoadMore total={resp.total} />
					</TabsContent>
					<TabsContent
						value="following"
						className="flex flex-col w-fit h-fit gap-4 overflow-y-scroll no-scrollbar"
					>
						{resp.posts}
						<LoadMore total={resp.total} />
					</TabsContent>
				</Tabs>
			</section>
		</div>
	);
}
