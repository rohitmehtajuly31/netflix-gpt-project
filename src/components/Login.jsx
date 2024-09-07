import {React, useState} from 'react'

 const Login = () => {
  const[issignupform, Setissignupform]=useState(false)
  const togglesignin=()=>{
    Setissignupform(!issignupform)
    

  };
  return (
    <div className=" min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg')] bg-cover bg-center">
      
      <form action="" className='bg-stone-950 bg-opacity-85 absolute w-3/12 p-8 my-52 mx-auto right-0 left-0 rounded-md'>
      <h2 className='text-4xl text-gray-50'>{issignupform?'Signup': 'Signin'}</h2>
<input type="text" placeholder='email' className='w-full p-2 m-3 rounded-sm bg-slate-600' /><br />
{issignupform&& (<input type="name" placeholder='Full Name' className='w-full p-2 m-3 rounded-sm' />)}
<input type="password" placeholder='passowrd' className='w-full p-2 m-3 rounded-sm' />
<button className='bg-red-900 p-2 m-3 rounded-sm w-full' onClick={(e)=>{e.preventDefault();}} >submit</button>
<h2 className='text-white' onClick={togglesignin}>if new user, click to signup</h2>
</form>
      </div>
  )
}
export default Login;