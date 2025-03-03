
import './App.css';
import Login from './Login';
import  Register  from './Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Header from './pages/Header';
// import Sidebar from './pages/Sidebar';
 import Dashboard from './pages/Dashboard';
 import Users from './pages/Users';
import ManageDestination from './pages/ManageDestination';
import Settings from './pages/Settings';
import ProtectedRoute from "./context/ProtectedRoutes.jsx";
 import { AuthProvider } from "./context/AuthContext";
// import { useState } from 'react';
import AdminLayout from './layouts/AdminLayout.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import Profile from './pages/Profile.jsx';

 

export const  App=()=>{ 
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  //  // Function to toggle sidebar
  //  const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle);
  // };
return(
  // BrowserRouter wraps the entire app
<BrowserRouter>
 {/* AuthProvider is wrapped inside BrowserRouter */}
   <AuthProvider>   
 
 
        
        <Routes>
          {/* Public route for Admin Login */}
        <Route path="/admin/login" element={<AdminLogin />} />
             {/* Protected Routes */}
       <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/Users"
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/Settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
       path="/admin/ManageDestination"
      element={
        <ProtectedRoute>
          <ManageDestination/>
          </ProtectedRoute>
      }/> 
       <Route
       path="/admin/profile"
      element={
        <ProtectedRoute>
          <Profile/>
          </ProtectedRoute>
      }/>





       
     

        <Route path='/Login'element={<Login/>}/> 
       <Route path='/Register'element={<Register/>}/>  
   </Routes> 
  
   
     </AuthProvider>  
</BrowserRouter>
 );
};

export default App


    
  

  
    
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
     
    
  
       
              
 
    
    
     
   
    
    
  


