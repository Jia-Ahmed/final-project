import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
//import { AuthProvider } from "./context/AuthContext";

//  import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
//import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
 
    {/* <BrowserRouter> */}
     {/* <AuthProvider>  */}
  <GoogleOAuthProvider clientId="321776547893-s7ninto8pnen21h3j480lhqu9j25g9ke.apps.googleusercontent.com">
      
    <App />
      
    </GoogleOAuthProvider>
   {/* </AuthProvider>, */}
    
       {/* </BrowserRouter>   */}
      
  
  </StrictMode>,
)
