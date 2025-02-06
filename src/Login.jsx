import React from 'react';
import{Link} from 'react-router-dom';
import{MdEmail} from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import{useState}from'react';






    export const Login=()=>{
       const[email,setEmail]=useState('');
              const[password,setPassword]=useState('');
              const [confirmPassword, setConfirmPassword] = useState("");
                const[errors,setErrors]=useState([]);
                
                
          
                const handleSubmit=(event)=>{
                 event.preventDefault();
                //   const errors= validate();
                //  setErrors(errors);
                const validationErrors = validate();
                setErrors(validationErrors);
          
                //  if(Object.keys(errors).length===0){
                //   alert("Done");
                //  }
                // }
      
                if (Object.keys(validationErrors).length === 0) {
                  alert("Registration Successful!");
                   }
                   };
          
                const validate=()=>{
                  const error = {};
          /////Email verification
                  if(!email){
                    error.email="Email is required";
                  }
                  else if (!/\S+@\S+\.\S+/.test(email)){
                    error.email="Email is invalid";
                  }
                  
                  
                  
          ///////Password verification
                  if(!password){
                    error.password="Password is required";
                  }
                  else if (password.length<8){
                    error.password = "Password must be at least 8 characters";
                  }
                  return error;
                };
    return(
      <div className='text-white h-[100vh] flex items-center justify-center bg-cover'style={{"backgroundImage":"url('../src/assets/logo.avif')"}}>
        <div className='bg-slate-300 border border-slate-500 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative'>
            <h1 className='text-5xl font-semibold' >Welcome Back!</h1>
            <p  className=' font-medium mt-4'>Please Enter Your Detail</p>
            <h2 className='text-4xl font-bold text-center mb-6 mt-3'>Login</h2>
            <form  onSubmit={handleSubmit}>
            
                <div className='relative my-4'>
                     <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='block w-full  px-0 py-2.5 text-sm  text-white  bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-blue-600 peer ' placeholder =" Your Email"/>
                     <MdEmail className='absolute top-4 right-4'/>
                      {errors.email && <div className='error text-red-500'>{errors.email}</div>}
                </div> 
                <div className='relative my-4'>
                      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-blue-600 peer' placeholder="Your password"/>
                      <RiLockPasswordFill className='absolute top-4 right-4' />
                      {errors.password && <div className='error text-red-500'>{errors.password}</div>}
                
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 items-center'>
                    <input type='checkbox'name=''id=''/>
                    <label htmlFor='Remember Me'>Remember Me</label>
                  </div>
                <Link to='' className='text-blue-500'>Forget Password?</Link>
                </div>
                <button type="submit" className='w-full text-[18px]  mt-4 rounded bg-blue-500 py-2 px-4 hover:bg-blue-600 transition-colors duration-300 '>Login</button>
                   <span className='m-4'>New Here? <Link className='text-blue-500' to="/Register">Create an Account</Link></span>   
            </form>
        </div>
      </div>
    );
};
export default Login;