import Layout from "./components/Layout.jsx";
import { Outlet } from "react-router-dom";
import { Suspense } from 'react';
import Loader from "./components/Loader.jsx";

export default function App(){
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Outlet />
      </Layout>
    </Suspense>
  )
}