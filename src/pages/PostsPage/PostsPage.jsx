import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const PostsPage = () => {
	const [posts, setPosts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3000/posts')
			.then((response) => response.json())
			.then((posts) => setPosts(posts))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{isLoading ? (
					<h4>Загрузка...</h4>
				) : (
					posts.length > 0 &&
					posts.map((post) => (
						<Link to={`/post/${post.id}`} key={post.id}>
							<li>{post.title}</li>
						</Link>
					))
				)}
			</ul>
		</div>
	);
};
