import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export const PostPageEdit = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [postEdit, setPostEdit] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch(`http://localhost:3000/posts/${id}`)
			.then((response) => response.json())
			.then((post) => setPostEdit(post))
			.catch(({ message }) => console.error(message))
			.finally(() => setIsLoading(false));
	}, [id]);

	const handleUpdatePost = async () => {
		await axios
			.patch(`http://localhost:3000/posts/${id}`, postEdit)
			.then((response) => response.data)
			.catch(({ message }) => console.error(message));
		await navigate(`/post/${id}`);
	};

	const handleChange = ({ target }) => {
		const { value, name } = target;

		setPostEdit((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div>
			{isLoading ? (
				<h1>Загрузка...</h1>
			) : (
				<div>
					<input value={postEdit.title} name="title" onChange={handleChange} />
					<input value={postEdit.body} name="body" onChange={handleChange} />
					<button onClick={handleUpdatePost}>Update Post</button>
				</div>
			)}
		</div>
	);
};
