import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import PrivateRoute from './components/PrivateRoute.jsx'

import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx';
import Marketplace from './pages/Marketplace/Marketplace.jsx'
import PlanificacionesDetalle from './pages/Marketplace/PlanificacionesDetalle.jsx'
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import Error404 from './pages/Error404/Error404.jsx';

import AppProfesionales from './pages/Profesionales/AppProfesionales.jsx';
import Dashboard from './pages/Profesionales/dashboard.jsx'
import Perfil from './pages/Perfil/Perfil.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "marketplace",
        element: <Marketplace />
      },
      {
        path: "marketplace/:id",
        element: <PlanificacionesDetalle />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "perfil",
        element: <PrivateRoute><Perfil /></PrivateRoute>
      }
    ]
  },
  {
    path: "/profesionales",
    element: <PrivateRoute><App /></PrivateRoute>,
    children: [
      {
        path: "",
        element: <AppProfesionales />
      },
      {
        path: "dashboard",
        element: <Dashboard />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
