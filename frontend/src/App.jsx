import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import Educations from './pages/Educations.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
        {
          index: true,
          element: < Home />,
        },
        {
          path: 'projets',
          element: < Projects />,
        },
        {
          path: 'competences',
          element: < Skills />,
        },
        {
          path: 'formations',
          element: < Educations />,
        },
        {
          path: 'contact',
          element: < Contact />,
        },
        {
          path: '*',
          element: < Home />,
        }
			]
		}
	]);

	return <RouterProvider router={router} />;
}
