// Body.js
import React from 'react';
import { useSelector } from 'react-redux';

const Body = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold">Welcome to the Body Component!</h1>
      
        <div className="mt-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
     
    </div>
  );
};

export default Body;
