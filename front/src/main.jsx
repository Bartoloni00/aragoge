import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const Home = React.lazy(() => import("./pages/Home/Home.jsx"));
const Marketplace = React.lazy(() => import('./pages/Marketplace/Marketplace.jsx'));
const Perfil = React.lazy(() => import('./pages/Perfil/Perfil.jsx'));
const Contact = React.lazy(() => import('./pages/Contact/Contact.jsx'));
const Login = React.lazy(() => import('./pages/Login/Login.jsx'));
const Register = React.lazy(() => import('./pages/Register/Register.jsx'));
const Error404 = React.lazy(() => import('./pages/Error404/Error404.jsx'));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/perfil",
        element: <Perfil />
      }
    ]
  },
  {
    path: "*",
    element: <Error404 />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={routes}>
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </React.StrictMode>
  </RouterProvider>
);