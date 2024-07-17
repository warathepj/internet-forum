// app/client-wrapper.js
'use client'; 

import { LoginProvider } from '../context/LoginContext';
import Login from './components/Login'; 

export default function LoginClientWrapper({ children }) {
  return (
    <LoginProvider>
      <Login />  {/* Render the LeftNav component */}
      {children} 
    </LoginProvider>
  );
}
