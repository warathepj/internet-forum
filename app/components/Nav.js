"use client"
import styles from './Nav.module.css';
import IcSharpMenu from './(icon)/IcSharpMenu';
import ChatProcessing from './(icon)/ChatProcessing';
import Button from './Button';
import LeftNav from './LeftNav';
import { useState, useEffect } from 'react';
import { useLeftNav } from '../../context/LeftNavContext';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const { isLeftNavOpen, setIsLeftNavOpen } = useLeftNav();
  console.log("isLeftNavOpen Nav : ", isLeftNavOpen);
  // const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
    const buttonText = "Log In";
    const router = useRouter(); 
    const toggleLeftNav = () => {
    setIsLeftNavOpen(!isLeftNavOpen);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (isLeftNavOpen && !event.target.closest(`.${styles.leftNavContainer}`)) {
  //       setIsLeftNavOpen(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isLeftNavOpen]); 
  return (
    <>
    <nav className={styles.container}>
        <IcSharpMenu className={styles.icon} onClick={toggleLeftNav} />
        <ChatProcessing className={styles.chatProcessing} onClick={() => router.push('/')} /> 
        <Button label={buttonText} />

    </nav>
        {/* {isLeftNavOpen && <LeftNav isOpen={isLeftNavOpen} />} */}
        // In Nav.js (or your parent component)
<LeftNav isOpen={isLeftNavOpen} toggleNav={() => setIsLeftNavOpen(!isLeftNavOpen)} />

    </>
  );
}
