"use client";

import { Input } from "@/components/ui/input";
import { Combobox } from "./Combobox";
import { Button } from "@/components/ui/button";
import { CalendarIcon, SearchIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import moment from "moment";

const FormSchema = z.object({
	tag: z.string(),
	search: z.string(),
	date: z.date({
		required_error: "A date of birth is required.",
	}),
});

export default function Header({}) {
	const [date, setDate] = React.useState<Date | undefined>(new Date());

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}

	return (
		<header>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex gap-4 p-4 justify-center items-stretch"
				>
					{/* <h1 className="text-2xl font-bold">Post Feed</h1> */}
					<FormField
						control={form.control}
						name="search"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Search</FormLabel>
								<Input
									type="search"
									placeholder="Search titles, descriptions or usernames..."
									className="w-[400px]"
									value={field.value}
									onChange={field.onChange}
									suffix={
										<Button variant={"outline"} size={"icon"}>
											<SearchIcon />
										</Button>
									}
								/>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="tag"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Tags</FormLabel>
								<Combobox value={field.value} onChange={field.onChange} />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem className="flex flex-col">
								<FormLabel>Date of creation</FormLabel>
								<Popover>
									<PopoverTrigger asChild>
										<FormControl>
											<Button
												variant={"outline"}
												className={cn(
													"w-[240px] pl-3 text-left font-normal",
													!field.value && "text-muted-foreground"
												)}
											>
												{field.value ? (
													moment(field.value).format("MMMM Do, YYYY")
												) : (
													<span>Pick a date</span>
												)}
												<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
											</Button>
										</FormControl>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0" align="start">
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
											disabled={(date) =>
												date > new Date() || date < new Date("1900-01-01")
											}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								{/* <FormDescription>
									Your date of birth is used to calculate your age.
								</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</header>
	);
}
