import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from 'react-router-dom';
import './index.css';
import Body from './components/Body';
import Header from './components/Header';
import Login from './components/login';
import { Provider } from 'react-redux';
import { onAuthStateChanged} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { auth } from './utils/firebase';

import appStore from './utils/appstore';
const Applayout = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
    useEffect(()=>{
 
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName}=user
    
      dispatch(addUser({uid:uid,email:email,name:displayName}))
      // navigate('./body')
     
    }
     
     else {
      dispatch(removeUser())
      navigate('/login');
     
    }
  });
    },[dispatch])

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
        path: '/body',
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
    <Provider store={appStore}> 
    <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
