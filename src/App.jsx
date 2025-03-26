import './App.css';
import Login from './Login';
import  Register  from './Register';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
import BookingDetails from './pages/BookingDetails.jsx';

 

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
       path="/admin/manage-destination"
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
       <Route
       path="/admin/bookings"
      element={
        <ProtectedRoute>
          <BookingDetails/>
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


    
  


    
   
      
  
    
  
       
              
 
    
    
     
   
    
    
  


