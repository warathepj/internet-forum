// app/page.js
'use client'
import Link from 'next/link';
import AnnounceCard from './components/AnnounceCard';
import Announce from './components/Announce';
import TopicsCard from './components/TopicsCard';
import LeftNav from './components/LeftNav';

import { useState } from 'react';
import { useMessages } from '../context/MessageContext';
import { useTopics } from '../context/TopicsContext';
import { useLeftNav } from '../context/LeftNavContext';
import { useLogin } from '../context/LoginContext';
import { PasswordProvider } from '../context/PasswordContext';
import { usePassword } from '../context/PasswordContext';
import Login from './components/Login';
import SliderCard from './components/SliderCard';
import Trend from './components/Trend';
import styles from './page.module.css'

export default function Home() {
  const { messages } = useMessages();
  const { topics } = useTopics();
  const { isLeftNavOpen, setIsLeftNavOpen } = useLeftNav();
  console.log("isLeftNavOpen : ", isLeftNavOpen);
  const { isLoginOpen, setIsLoginOpen } = useLogin();
  const { passwords } = usePassword();
  console.log("passwords : ", passwords);

  // In your parent component or a utility function
  function toggleBodyScrolling(disable) {
    if (disable) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; // Restore normal scrolling
    }
  }

  // Call this function when the LeftNav opens/closes
  // For example, inside the toggleNav function:
  function toggleNav() {
    setIsLeftNavOpen(!isLeftNavOpen);
    toggleBodyScrolling(!isLeftNavOpen); // Pass the opposite of the current state
  }


  return (
    <>
    {/* <PasswordProvider> */}
    <ul>
      {passwords.map((password, index) => (
        <li key={index}>{password}</li>
      ))}
    </ul>
      {/* <div className={styles.login}> */}

      {isLoginOpen && <Login />}
      {/* </div> */}
      {/* <Login isOpen={isLoginOpen} /> */}
      {isLeftNavOpen && (
        <div className={styles.overlay}></div>
      )}
      <div className={styles.sliderCard}>
        <div className={styles.leftNav}>

          <LeftNav isOpen={isLeftNavOpen} />
          {/* <LeftNav isOpen={isLeftNavOpen} toggleNav={() => setIsLeftNavOpen(!isLeftNavOpen)} /> */}
        </div>


        <SliderCard />
      </div>

      <Trend />
      <Announce />
      {/* {messages.map(message => (
        <Link 
          key={message.id} 
          href={`/announce/${message.id}`}
        > 
          <AnnounceCard msg={message.content} /> 
        </Link>
      ))} */}

      <h4>TOPICS</h4>
      {topics.map(topic => (
        <Link
          key={topic}
          href={`/topics/${topic}`}
        >
          <TopicsCard msg={topic} />
        </Link>
      ))}
{/* </PasswordProvider> */}

      {/* </LeftNavProvider> */}
    </>
  );
}
