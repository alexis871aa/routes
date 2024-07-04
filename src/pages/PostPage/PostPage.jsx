import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const PostPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [post, setPost] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(`http://localhost:3000/posts/${id}`)
			.then((response) => response.json())
			.then((post) => setPost(post))
			.catch(({ message }) => console.error(message))
			.finally(() => setIsLoading(false));
	}, [id]);

	const handleEditPost = () => {
		navigate(`/post/${id}/edit`);
	};

	return (
		<div>
			{isLoading ? (
				<h5>Загрузка...</h5>
			) : post ? (
				<>
					<h1>{post && post.title}</h1>
					<p>{post && post.body}</p>
					<button onClick={handleEditPost}>Edit Post</button>
				</>
			) : (
				<h5>Пост не найден!</h5>
			)}
		</div>
	);
};
