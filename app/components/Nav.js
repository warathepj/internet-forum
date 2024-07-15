"use client"
import styles from './Nav.module.css';
import IcSharpMenu from './(icon)/IcSharpMenu';
import ChatProcessing from './(icon)/ChatProcessing';
import Button from './Button';
import LeftNav from './LeftNav';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
    const buttonText = "Log In";
    const toggleLeftNav = () => {
    setIsLeftNavOpen(!isLeftNavOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLeftNavOpen && !event.target.closest(`.${styles.leftNavContainer}`)) {
        setIsLeftNavOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLeftNavOpen]); 
  return (
    <>
    <nav className={styles.container}>
        <IcSharpMenu className={styles.icon} onClick={toggleLeftNav} />

        <ChatProcessing className={styles.chatProcessing} />
        <Button label={buttonText} />

    </nav>
        {isLeftNavOpen && <LeftNav isOpen={isLeftNavOpen} />}
    </>
  );
}
