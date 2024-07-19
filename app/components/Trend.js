// app/components/Trend.js
// 'use client'
import Link from 'next/link';
import { useContext } from 'react';
import { usePosts} from '../../context/PostsContext';
import { useMessages } from '../../context/MessageContext';
import PostCard from './PostCard';
import styles from './Trend.module.css';

export default function Trend() {
  // const { posts } = useContext(PostsContext);
  // const { posts } = useContext(MessageContext);
  const { messages } = useMessages();
  const { posts } = usePosts();

  

  return (
    <div className={styles.container}>
      <p>trend</p> 
      {posts.map(({ id, avatar, room, topic, image, content }) => (
// when click app/components/Trend.js

        <Link key={id} href={`/posts/${id}`} className={styles.postCard}>
          <PostCard id={id} avatar={avatar} room={room} topic={topic} content={content} image={image}/>
        </Link>
      ))}
      
    </div>
  );
}
