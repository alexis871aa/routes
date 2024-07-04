import { PostPage, PostPageEdit, PostsPage } from './pages';

export const routes = [
	{
		path: '/',
		element: <h1>App</h1>,
	},
	{ path: '/posts', element: <PostsPage /> },
	{ path: '/post/:id', element: <PostPage /> },
	{ path: '/post/:id/:edit', element: <PostPageEdit /> },
];
