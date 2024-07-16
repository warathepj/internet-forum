'use client'
import Link from 'next/link';
import AnnounceCard from './components/AnnounceCard';
import Announce from './components/Announce';
import TopicsCard from './components/TopicsCard';
import { useMessages } from '../context/MessageContext';
import { useTopics } from '../context/TopicsContext';
import { useLeftNav } from '../context/LeftNavContext';
import SliderCard from './components/SliderCard';
import Trend from './components/Trend';
import styles from './page.module.css'

export default function Home() {
  const { messages } = useMessages();
  const { topics } = useTopics();
  const { isLeftNavOpen } = useLeftNav();
  console.log("isLeftNavOpen : ", isLeftNavOpen);
  
  // In your parent component or a utility function
// function toggleBodyScrolling(disable) {
//   if (disable) {
//     document.body.style.overflow = 'hidden'; 
//   } else {
//     document.body.style.overflow = 'auto'; // Restore normal scrolling
//   }
// }

// Call this function when the LeftNav opens/closes
// For example, inside the toggleNav function:
// function toggleNav() {
//   setIsLeftNavOpen(!isLeftNavOpen);
//   toggleBodyScrolling(!isLeftNavOpen); // Pass the opposite of the current state
// }


  return (
    <>
      {/* <LeftNavProvider> */}
      {/* <div className={`styles.overlay ${isLeftNavOpen ? 'active' : ''}`}></div> */}
      <SliderCard />
      {isLeftNavOpen && ( 
        <div className={styles.overlay}></div> 
      )}
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


{/* </LeftNavProvider> */}
    </>
  );
}
