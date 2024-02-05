import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PostData, UserData } from "@/app/data";
import UserHeader from "./UserHeader";
import { PostContent } from "./PostCardContent";
import { PostFooter } from "./PostCardFooter";
import { getPostsByUser } from "@/app/api";
import { PostHeader } from "./PostCardHeader";
import { PostAnimatedCard } from "./PostAnimatedCard";

export default async function PostCard({
	post,
	user,
	index,
}: {
	post: PostData;
	user: UserData;
	index: number;
}) {
	const posts = await getPostsByUser(user.userId);

	return (
		<PostAnimatedCard index={index}>
			<Card className="max-w-[600px]">
				<UserHeader user={user} date={post.date} posts={posts} />
				<CardHeader className="gap-1 p-4">
					<PostHeader title={post.title} desc={post.description} tags={post.tags} />
				</CardHeader>
				<CardContent className="px-4 pb-4">
					<PostContent image={post.imageURL} />
				</CardContent>
				<CardFooter className="justify-between px-4 pb-4">
					<PostFooter likes={post.likes} comments={post.comments} />
				</CardFooter>
			</Card>
		</PostAnimatedCard>
	);
}
