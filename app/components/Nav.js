// app/components/Nav
"use client"
import styles from './Nav.module.css';
import IcSharpMenu from './(icon)/IcSharpMenu';
import ChatProcessing from './(icon)/ChatProcessing';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLeftNav } from '../../context/LeftNavContext';
import { useLogin } from '../../context/LoginContext';


export default function Nav() {
  
  // const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
    const buttonText = "Log In";
    const router = useRouter(); 
    const { isLeftNavOpen, setIsLeftNavOpen } = useLeftNav();
    const { isLoginOpen, setIsLoginOpen } = useLogin();
  console.log("isLeftNavOpen : ", isLeftNavOpen);
  const handleMenuClick = () => {
    setIsLeftNavOpen(true); 
  };
  const handleLoginClick = () => {
    setIsLoginOpen(true); 
  };
  
  return (
    <>
    <nav className={styles.container}>
        <IcSharpMenu className={styles.icon} onClick={handleMenuClick} />
        {/* <IcSharpMenu className={styles.icon} onClick={toggleLeftNav} /> */}
        <ChatProcessing className={styles.chatProcessing} onClick={() => router.push('/')} /> 
        <Button label={buttonText} onClick={handleLoginClick} />

    </nav>
        

    </>
  );
}
