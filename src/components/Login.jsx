import { React, useRef, useState } from 'react';
import validate from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [isSignupForm, setIsSignupForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = validate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignupForm) {
      // This should be handled with the imported `auth` object
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          // Handle the successful signup
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}: ${errorMessage}`);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignupForm(!isSignupForm);
  };

  return (
    <div className="min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg')] bg-cover bg-center">
      <form  className='bg-stone-950 bg-opacity-85 absolute w-3/12 p-8 my-52 mx-auto right-0 left-0 rounded-md'>
        <h2 className='text-4xl text-gray-50'>{isSignupForm ? 'Signup' : 'Signin'}</h2>
        <input ref={email} type="text" placeholder='Email' className='w-full p-2 m-3 rounded-sm bg-slate-600' /><br />
        {isSignupForm && (<input type="text" placeholder='Full Name' className='w-full p-2 m-3 rounded-sm' />)}
        <input ref={password} type="password" placeholder='Password' className='w-full p-2 m-3 rounded-sm' />
        <h3 className='text-red-700'>{errorMessage}</h3>
        <button onClick={handleButtonClick} className='bg-red-900 p-2 m-3 rounded-sm w-full'>Submit</button>
        <h2 className='text-white cursor-pointer' onClick={toggleSignIn}>
          {isSignupForm ? 'Already have an account? Sign in' : 'New user? Click to signup'}
        </h2>
      </form>
    </div>
  );
};

export default Login;
