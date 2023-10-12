import React,{useState} from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formdata, setFormdata] =useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
           setFormdata({
            ...formdata,
            [e.target.id]:e.target.value
           });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
       setLoading(true);
       const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(formdata),
      });
      const data = await res.json();
      if(data.success === false){
        setLoading(false);
        console.error(error);
        setError("An error occurred while signing up. Please try again.");
        return;
      }
      setLoading(false);
      setError(null)
      navigate('/sign-out')
      console.log(data);
    }catch(error){
      setLoading(false);
      setError(error.message)
    } 
  }
  return (
    <div className='p-3 mx-auto max-w-lg'>
      <h1 className='text-center text-3xl font-semibold my-7'>SignUp</h1>
     <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input type='text' placeholder='username' id='username' className='rounded-lg border p-3 focus:outline-none' onChange={handleChange}/>
      <input type='email' placeholder='email' id='email' className='rounded-lg border p-3 focus:outline-none' onChange={handleChange}/>
      <input type='password' placeholder='password' id='password' className='rounded-lg border p-3 focus:outline-none' onChange={handleChange}/>
      <button disabled={loading} className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-90 disabled:opacity-50'>{loading ? '...loading': 'Sign Up'}</button>
     </form>
     <div className='flex gap-3 mt-5'>
     <p>Having a account?</p>
     <Link to={"/sign-out"}>
      <span className='text-blue-700'>Sign In</span>
     </Link>
     </div>
     {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  ) 
}
