import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

/* Vista de usuarios */
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx';
const Marketplace = lazy(() => import('./pages/Marketplace/Marketplace.jsx'))
const PlanificacionesDetalle = lazy(() => import('./pages/Marketplace/PlanificacionesDetalle.jsx'));
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';

/* Vista de Usuarios Logueados */
import Perfil from './pages/Perfil/Perfil.jsx'

/* Vistas de profesionales */
import HomePro from './pages/Profesionales/HomePro.jsx';
import Create from './pages/Profesionales/Create.jsx';
import Delete from './pages/Profesionales/Delete.jsx';
import Edit from './pages/Profesionales/Edit.jsx';

/* Vistas de Admin */
import HomeAdmin from './pages/Admin/HomeAdmin.jsx';

/* Vista de Error */
import Error404 from './pages/Error404/Error404.jsx';
import Loader from './components/Loader.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
const routes = createBrowserRouter([
  //Rutas de usuarios normales
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "marketplace",
        element: <Suspense fallback={<Loader />}><Marketplace /></Suspense>
      },
      {
        path: "marketplace/:id",
        element: <Suspense fallback={<Loader />}><PlanificacionesDetalle /></Suspense>
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "perfil",
        element: <PrivateRoute allowedRoles={["atleta", "profesional", "entrenador", "nutricionista", "terapeuta", "admin"]}><Perfil /></PrivateRoute>
      },
    ]
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
    path: "/profesionales",
    element: <App />,
    children: [
      {
        path: "",
        element: <PrivateRoute allowedRoles={["entrenador", "profesional", "nutricionista", "terapeuta", "admin"]}><HomePro /></PrivateRoute>,
      },
      {
        path: "create",
        element: <PrivateRoute allowedRoles={["entrenador", "profesional", "nutricionista", "terapeuta", "admin"]}><Create /></PrivateRoute>
      },
      {
        path: "edit/:id",
        element: <PrivateRoute allowedRoles={["entrenador", "profesional", "nutricionista", "terapeuta", "admin"]}><Edit /></PrivateRoute>
      },
      {
        path: "delete/:id",
        element: <PrivateRoute allowedRoles={["entrenador", "profesional", "nutricionista", "terapeuta", "admin"]}><Delete /></PrivateRoute>
      },
    ]
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "",
        element: <PrivateRoute allowedRoles={["admin"]}><HomeAdmin /></PrivateRoute>
      }
    ]
  },
  {
    path: "*",
    element: <App />,
    children: [
      {
        path: "*",
        element: <Error404 />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
