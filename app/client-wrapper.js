// app/client-wrapper.js
'use client'; 

import { LeftNavProvider } from '../context/LeftNavContext';
import LeftNav from './components/LeftNav'; 

export default function ClientWrapper({ children }) {
  return (
    <LeftNavProvider>
      <LeftNav />  {/* Render the LeftNav component */}
      {children} 
    </LeftNavProvider>
  );
}
