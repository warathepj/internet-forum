// app/components/PostCard.js

// import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { usePosts } from '../../context/PostsContext';
import AddComment from './AddComment';
import JoinButton from './JoinButton';
import styles from './PostCard.module.css';

function PostCard({ id, room, topic, avatar, content, image }) {
  
  const { posts } = usePosts();
  // Find the post with the matching ID
  const post = posts.find(post => post.id === id); 
  const [randomTime, setRandomTime] = useState(0);
  useEffect(() => {
    const generateRandomTime = () => {
      const timeInSeconds = Math.floor(Math.random() * 259200) + 1;
      setRandomTime(timeInSeconds);
    };
    generateRandomTime(); 
  }, []);
  const formattedTime = 
    randomTime > 86400 // 24 hours in seconds
      ? Math.floor(randomTime / 86400) + ' day' 
      : randomTime > 3600 // 1 hour in seconds
        ? Math.floor(randomTime / 3600) + ' hr'
        : randomTime > 59
          ? Math.floor(randomTime / 60) + ' min' 
          : randomTime + ' sec';
  return (
    <div className={styles.container}>
      <p>------------------------</p>
      <p>Post ID: {id}</p>
      <div className={styles.header}>
<div className={styles.info}>

      <img src={avatar || '/next.svg'} alt="Avatar" className={styles.avatar} />
<div className={styles.room}>

      <p>{room}</p>
      <p> . </p> 
      <p>{formattedTime} ago</p>
</div>
</div>
      <JoinButton />

{/* in app/components/PostCard.js/<p></p>
 random time in second from 1 to 259200 seconds, if over 59 change to min */}
      </div>
      <p>{topic}</p>

      {/* <p>{content}</p> */}
  
      {post ? <img src={post.image} alt="Post Image" className={styles.image}/> : "No image"}
      {/* <img src={image}/> */}
      <p>------------------------</p>
      

<AddComment />
      {/* Other content of the PostCard component */}
    </div>
  );
}

export default PostCard;
