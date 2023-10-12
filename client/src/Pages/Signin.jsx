import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='text-center text-3xl font-semibold my-7'>SignUp</h1>
     <form className='flex flex-col gap-4'>
      <input type='text' placeholder='username' id='username' className='rounded-lg border p-3 focus:outline-none'/>
      <input type='email' placeholder='email' id='email' className='rounded-lg border p-3 focus:outline-none'/>
      <input type='password' placeholder='password' id='password' className='rounded-lg border p-3 focus:outline-none'/>
      <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-50'>Sign Up</button>
     </form>
     <div className='flex gap-3 mt-5'>
     <p>Having a account?</p>
     <Link to={"/sign-out"}>
      <span className='text-blue-700'>Sign In</span>
     </Link>
     </div>
    </div>
  ) 
}
