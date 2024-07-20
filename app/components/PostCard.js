// app/components/PostCard.js/

// import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { usePosts } from '../../context/PostsContext';
import { useUsers } from '../../context/UsersContext';
import { UsersProvider } from '../../context/UsersContext';
import { UsersContext } from '../../context/UsersContext';

import Link from 'next/link';
import VoteButton from './VoteButton';
import SeeCommentButton from './SeeCommentButton';
import ShareButton from './ShareButton';
import AddComment from './AddComment';
import JoinButton from './JoinButton';
import styles from './PostCard.module.css';

function PostCard({ id, room, poster, topic, avatar, content, image }) {

  const { posts } = usePosts();
  // Find the post with the matching ID
  const post = posts.find(post => post.id === id);
console.log("post : ", post)

  // Find the user who created the post (using posterId from post)
  const [randomTime, setRandomTime] = useState(0);
  const { users } = useUsers();
  const posterUser = users.find(user => user.id === post.posterId);
console.log("posterUser : ", posterUser)
  useEffect(() => {
    const generateRandomTime = () => {
      const timeInSeconds = Math.floor(Math.random() * 100_000) + 1;
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
      <div>
        {users.map(user => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <ul>
              {user.comments.map((comment, index) => (
                <li key={index}>
                  <strong>Post ID: {comment.postId}</strong>
                  <p>{comment.comment}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

{/* NEW */}
<div className={styles.header}>
<div className={styles.info}>

      <p>Post ID: {id}</p>
      {/* render img in app/components/PostCard.js/, posterId in */}
      {/* context/PostsContext.js same to id in context/UsersContext.js/ */}
      {/* img src is from avatar in context/UsersContext.js/ */}
      {posterUser && (
        <img 
          src={posterUser.avatar || '/next.svg'} 
          alt={`${posterUser.name}'s Avatar`} 
          className={styles.avatar} 
        />
      )}
          <div className={styles.postInfoContainer}>
          <div className={styles.postInfo}>

      </div>
      </div>
      </div>
      </div>
{/* NEW */}
      {/* OLD */}
      <div className={styles.header}>
        <div className={styles.info}>

          <img src={avatar || '/next.svg'} alt="Avatar" className={styles.avatar} />
          <div className={styles.postInfoContainer}>
            <div className={styles.postInfo}>
              <p>{room}</p>
              <p> . </p>
              <p>{formattedTime} ago</p>
              {/* // move app/components/PostCard.js */}

            </div>
            <p className={styles.poster}>{poster}</p>
          </div>
        </div>
        <JoinButton />

        {/* in app/components/PostCard.js/<p></p>
 random time in second from 1 to 259200 seconds, if over 59 change to min */}
      </div>
      <p>{topic}</p>

      {/* <p>{content}</p> */}

      {post ? <img src={post.image} alt="Post Image" className={styles.image} /> : "No image"}
      <p>{content}</p>
      <VoteButton />
      {/* when click app/components/PostCard.js/ */}
      <Link href={`/posts/${id}`}> {/* Wrap SeeCommentButton with Link */}
        <SeeCommentButton />
      </Link>
      {/* go to posts/{id} */}
      <ShareButton />
      <AddComment />
      {/* OLD */}
    </div>
  );
}

export default PostCard;
