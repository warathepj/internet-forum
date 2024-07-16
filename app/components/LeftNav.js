import styles from './LeftNav.module.css';
import TopicsCard from './TopicsCard';
import { useTopics } from '../../context/TopicsContext';
import { useLeftNav } from '../../context/LeftNavContext';

import Link from 'next/link';

export default function LeftNav({ isOpen, toggleNav }) {
  const { topics } = useTopics();
  const { isLeftNavOpen } = useLeftNav();
  console.log("isLeftNavOpen LeftNav : ", isLeftNavOpen);
    return (
      <>
        <nav className={`${styles.container} ${isOpen ? styles.open : ''}`}>
          <p>TOPICS</p>
          {topics.map(topic => (
        <Link 
          key={topic} 
          href={`/topics/${topic}`}
          onClick={() => setIsLeftNavOpen(false)}
        > 
          <TopicsCard msg={topic} /> 
        </Link>
      ))}
        </nav>
        </>
      );
}
