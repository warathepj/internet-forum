import styles from './LeftNav.module.css';
import TopicsCard from './TopicsCard';
import { useTopics } from '../../context/TopicsContext';
import Link from 'next/link';

export default function LeftNav({ isOpen }) {
  const { topics } = useTopics();

    return (
        <nav className={`${styles.container} ${isOpen ? styles.open : ''}`}>
          <p>TOPICS</p>
          {topics.map(topic => (
        <Link 
          key={topic} 
          // href={`/announce/${message.id}?content=${encodeURIComponent(message.content)}`}
          href={`/topics/${topic}`}
        > 
          <TopicsCard msg={topic} /> 
        </Link>
      ))}
        </nav>
      );
}
