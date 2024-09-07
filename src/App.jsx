import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import Body from './components/Body';
import Header from './components/Header';
import Login from './components/Login'

  

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* This will render the child routes */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: 'login',
        element: <Login />,
      },

    ],
  },
]);

function App() {


  return (
    <RouterProvider router={router} />
  );
}

export default App;
