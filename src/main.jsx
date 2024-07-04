import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';
import './main.module.css';

const newRouter = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
	// самый новый способ роутинга с использование RouterProvider
	<RouterProvider router={newRouter} />,
);

// <BrowserRouter>
// 	<App />
// 	{/*<Routes>*/}
// 	{/*	<Route path="/" element={<App />} />*/}
// 	{/*	<Route path="/posts" element={<PostsPage />} />*/}
// 	{/*	<Route path="/post/:id" element={<PostPage />} />*/}
// 	{/*	<Route path="/post/:id/:edit" element={<PostPageEdit />} />*/}
// 	{/*</Routes>*/}
// </BrowserRouter>,
