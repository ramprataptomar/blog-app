import { useState } from 'react';
import './App.css'
import './style.scss'
import { BrowserRouter, Routes, Route, Outlet, createBrowserRouter, RouterProvider } from "react-router";
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Write from './pages/Write.jsx';
import Home from './pages/Home.jsx';
import Single from './pages/Single.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },
      {
        path: "/write",
        element: <Write />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App
