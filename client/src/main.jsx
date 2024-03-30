import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PageNotFound from './pages/PageNotFound.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const Blogs = lazy(() => import('./pages/Blogs.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/blogs",
        element:<Blogs/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/services",
        element:<Services/>
      }, 
      {
        path: "/contact-us",
        element:<Contact/>
      },
      {
        path: "*",
        element:<PageNotFound/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)
