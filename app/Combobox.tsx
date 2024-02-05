"use client";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { posts } from "./data";

const tags = [...new Set(posts.flatMap((post) => post.tags))].map((tag) => ({
	value: tag,
	label: tag,
}));

export function Combobox({
	value,
	onChange,
}: {
	value: string;
	onChange: (...event: any[]) => void;
}) {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[200px] justify-between text-muted-foreground capitalize"
				>
					{value ? tags.find((tag) => tag.value === value)?.label : "Select tag..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Search tag..." />
					<CommandEmpty>No tag found.</CommandEmpty>
					<CommandGroup className="max-h-[200px] overflow-y-scroll no-scrollbar">
						{tags.map((tag) => (
							<CommandItem
								key={tag.value}
								value={tag.value}
								onSelect={(currentValue) => {
									onChange(currentValue);
									// setValue(currentValue === value ? "" : currentValue);
									setOpen(false);
								}}
								className="capitalize"
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4",
										value === tag.value ? "opacity-100" : "opacity-0"
									)}
								/>
								{tag.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
