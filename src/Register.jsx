import React from 'react';
import{Link} from 'react-router-dom';
import{MdEmail} from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import{useState}from'react';

export const Register = () => {
  const login = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
    onError:()=> alert("Google login failed"),
  });
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
            
   ///////Confirm Password
           if (password !== confirmPassword) {
              error.confirmPassword = "Passwords do not match";
            }

            return error;
          };
        return(
          <div className='text-white h-[100vh]  flex items-center justify-center bg-cover'style={{"backgroundImage":"url('../src/assets/logo.avif')"}}>
            <div className='bg-slate-300 border border-slate-500 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative w-50'>
                <h1 className='text-4xl font-bold text-center mb-6'>Register</h1>
                <form onSubmit={handleSubmit}>
                  {/* Email Field */}
                    <div className='relative my-4'>
                         <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} className='block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-blue-600 peer ' placeholder=" Your Email"/> 
                        {/* <input
               type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-2 px-3 text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            /> */}
                          <MdEmail className='absolute top-3 right-3 text-white'/>
                          {errors.email && <div className='error text-red-500 text-sm'>{errors.email}</div>}
                        </div> 
                        {/*password field*/}
                    <div className='relative my-4'>
                            <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} className='block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-blue-600 peer' placeholder="Your password"/>  
                 {/* <input type="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="block w-full py-2 px-3 text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Your Password"
                  /> */}
                     
                           <RiLockPasswordFill className='absolute top-3 right-3 text-white' /> 
                          {errors.password && <div className=' text-red-500'>{errors.password}</div>} 
                     {/* <label htmlFor='' className='absolute text-sm duration-300 transform-transfer scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label> 
                         */}
                    </div>
                  {/* Confirm password field*/}
                    <div className='relative my-4'>
                           <input type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} className='block w-full py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-grey-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-blue-600 peer' placeholder="Confirm password"/> 
                          
                          {/* <input type="password"
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full py-2 px-3 text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  placeholder="Confirm Password"
                  /> */}


                          <RiLockPasswordFill className='absolute top-3 right-3 text-white ' />
                          {errors.confirmPassword && (<div className="text-red-500 text-sm">{errors.confirmPassword}</div>)}
                     {/* <label htmlFor='' className='absolute text-sm duration-300 transform-transfer scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label> 
                         */}
                    </div>
                    
                    <button type="submit" className='w-full text-[18px]  mt-4 rounded bg-blue-500 py-2 px-4 hover:bg-blue-600 transition-colors duration-300'>Register</button>
                     
                </form>
                 <div className='divider mt-4 text-center'>OR</div>
               
                 <button className='w-full text-[18px]  mt-4 rounded bg-blue-500 py-2 px-4 hover:bg-blue-600 transition-colors duration-300 gap-3' onClick={() => login()}>Sign in with Google </button>
                 <span className='m-4'>Already Create an Account?<Link className='text-blue-500' to="/Login">Login</Link></span> 
                {/* <GoogleLogin
                    onSuccess={(credentialResponse) => {
                    const  credentialResponseDecoded = jwtDecode(
                      credentialResponse.credential);
                      console.log(credentialResponseDecoded);
                    
                 }}
                  onError={() => {
                  console.log('Login Failed');
               }}
             /> */}
            </div>
          </div>
        );
    };
    export default Register;
  

