import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps & { suffix?: React.ReactNode }>(
	({ className, type, suffix, ...props }, ref) => {
		if (suffix) {
			return (
				<span className={cn("flex h-10 w-full rounded-md border border-input", className)}>
					<input
						type={type}
						className={cn(
							"grow rounded-md bg-background pl-3 mr-1 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
							className
						)}
						ref={ref}
						{...props}
					/>
					<span className="flex items-center py-2 text-muted-foreground hover:text-accent-foreground focus-within:text-accent-foreground overflow-hidden">
						{suffix}
					</span>
				</span>
			);
		}
		return (
			<input
				type={type}
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Input.displayName = "Input";

export { Input };
