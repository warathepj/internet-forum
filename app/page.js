'use client'
import Link from 'next/link';
import AnnounceCard from './components/AnnounceCard';
import Announce from './components/Announce';
import TopicsCard from './components/TopicsCard';
import { useMessages } from '../context/MessageContext';
import { useTopics } from '../context/TopicsContext';

export default function Home() {
  const { messages } = useMessages();
  const { topics } = useTopics();
  // const topics = ["Vehicles", "Gadgets", "Science", 
  // "Business"];

  return (
    <>
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
          // href={`/announce/${message.id}?content=${encodeURIComponent(message.content)}`}
          href={`/topics/${topic}`}
        > 
          <TopicsCard msg={topic} /> 
        </Link>
      ))}


      {topics.map((topic, index) => (
        <TopicsCard key={index} msg={topic} /> 
      ))}
    </>
  );
}
