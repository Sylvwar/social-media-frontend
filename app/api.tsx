"use server";

import PostCard from "../components/post_card/PostCard";
import { PostData, UserData, posts, users } from "./data";

export async function getPosts(page: number) {
	let start = (page - 1) * 9;
	let end = (page - 1) * 9 + 9;
	return {
		total: posts.length - 9,
		posts: posts.slice(start, end).map((post, index) => {
			let user: UserData = users.filter((user) => user.userId === post.userId)[0];
			return <PostCard post={post} user={user} index={index} key={post.id} />;
		}),
	};
}

export async function getPostsByUser(userId: number) {
	let userPosts: PostData[] = posts.filter((post) => post.userId === userId);
	return userPosts.length;
}
