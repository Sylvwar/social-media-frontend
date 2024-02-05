import { CardDescription, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function PostHeader({ title, desc, tags }: { title: string; desc: string; tags: string[] }) {
	return (
		<>
			<CardTitle className="whitespace-nowrap overflow-hidden text-ellipsis text-2xl">
				{title}
			</CardTitle>
			<Separator />
			<Tooltip>
				<TooltipTrigger asChild>
					<CardDescription className="overflow-hidden text-ellipsis line-clamp-1">
						{desc}
					</CardDescription>
				</TooltipTrigger>
				<TooltipContent align="center" className="max-w-[400px]">
					{desc}
				</TooltipContent>
			</Tooltip>
			<span>
				{tags.map((tag) => (
					<Badge variant={"outline"} key={tag} className="gap-[0.1rem]">
						<span className="text-muted-foreground select-none">#</span>
						<span>{tag}</span>
					</Badge>
				))}
			</span>
		</>
	);
}
