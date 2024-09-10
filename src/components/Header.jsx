import React from 'react';
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate('/login'); // Redirect to home after signing out
    }).catch((error) => {
      console.error('Error during sign out:', error); // Handle error
    });
  };

  return (
    <div className='px-8 py-3 bg-gradient-to-t from-black flex justify-between'>
      <img className=' w-50 h-10' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="netflix" />
      <div className='flex p-2 '>
        <img className='mx-2 rounded-lg' src="https://occ-0-3213-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt="profile" />
        <button onClick={handleSignOut} className='text-yellow-50'>Sign Out</button>
      </div>
    </div>
  );
};

export default Header;
