
import './App.css';
import Login from './Login';
import  Register  from './Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

 

export const  App=()=>{
  
return(
<BrowserRouter>
<Routes>
   
       <Route path='/Login'element={<Login/>}/> 
       <Route path='/Register'element={<Register/>}/>
   </Routes>  
</BrowserRouter>
 );
};




    
  

  
    
  // const [isLogin, setIsLogin] = useState(true);

  //     return (
        
  //       // <div className=' flex w-full h-screen items-center justify-center bg-cover'>
  //       // {/* <div className='w-full flex items-center justify-center lg:w-1/2'> */}
  //       <div className='text-white h-[100vh] flex  justify-center items-center bg-cover 'style={{"backgroundImage":"url('../src/assets/logo.avif')"}}> 
  //        {/* <div className="bg-white shadow-lg rounded-lg p-8 w-96"> */}
        
  //        <div>
  //           {isLogin ? <Login /> : <Register />}
            

  //           <div className="mt-4 text-center"> 
               
  //              {isLogin ? (
  //               <p  className="text-sm text-black">
  //                 New Here?{' '}
  //                 <span
  //                   className="text-blue-500 font-semibold cursor-pointer hover:underline"
  //                   onClick={() => setIsLogin(false)}
  //                 >
  //                   Create an Account
  //                 </span>
  //               </p>
  //             ) : (
  //               <p className="text-sm text-black">
  //                 Already have an account?{' '}
  //                 <span
  //                   className="text-blue-500 font-semibold cursor-pointer hover:underline"
  //                   onClick={() => setIsLogin(true)}
  //                 >
  //                   Login
  //                 </span>
  //               </p>
               
  //             )}
  //            </div>
  //         </div>
  //       </div>
         
     
  //     )
  //   };
      
    
  
   
    // <div className='text-white h-[100vh] flex items-center justify-center bg-cover'style={{"backgroundImage":"url('../src/assets/img2.jpg')"}}>
    // {/* <Login/> */}
    //  <Routes>
    //     <Route path='Login'element={<Login/>}/> 
    //     </Routes>
    // </div>
    // )}
    
   
      
  // return(
     
      //   <Routes>
      //   <Route path='/Login'element={<Login/>}/> 
      //    <Route path='/Register'element={<Register/>}/>
      //  </Routes> 
     
    
  
       
              
 
    
    
     
   
    
    
  

export default App

