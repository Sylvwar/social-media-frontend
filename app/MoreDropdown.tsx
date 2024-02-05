import {
	Ban,
	Cloud,
	Code,
	Code2,
	CreditCard,
	Flag,
	Frown,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MoreDropdown() {
	return (
		<DropdownMenuContent align="start" className="w-56">
			<DropdownMenuLabel>More Actions</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuGroup>
				<DropdownMenuItem>
					<UserPlus strokeWidth={2.5} className="h-4 w-4 mr-2" />
					<span>Follow</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Code2 strokeWidth={2.5} className="mr-2 h-4 w-4" />
					<span>Integration</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Frown strokeWidth={2.5} className="mr-2 h-4 w-4" />
					<span>Not Interested</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Ban strokeWidth={2.5} className="mr-2 h-4 w-4" />
					<span>Block User</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Flag strokeWidth={2.5} className="mr-2 h-4 w-4" />
					<span>Report Post</span>
				</DropdownMenuItem>
			</DropdownMenuGroup>
		</DropdownMenuContent>
	);
}
