'use client'

// Create a context
import { createContext, useContext, useState } from 'react';
const LoginContext = createContext();
// const LeftNavContext = createContext();
// Provider component
// function LeftNavProvider({ children }) {
function LoginProvider({ children }) {
//   const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    // <LeftNavContext.Provider value={{ isLeftNavOpen, setIsLeftNavOpen }}>
    <LoginContext.Provider value={{ isLoginOpen, setIsLoginOpen }}>
      {children}
    </LoginContext.Provider>
  );
}

// export function useLeftNav() {
export function useLogin() {
    // return useContext(LeftNavContext);
    return useContext(LoginContext);
  }

  export { LoginProvider };
//   export { LeftNavProvider };