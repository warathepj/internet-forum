// app/components/PostCard.js

// import React from 'react';
import { useEffect, useRef } from 'react';
import AddComment from './AddComment';
import JoinButton from './JoinButton';
import styles from './PostCard.module.css';

function PostCard({ id, avatar, content }) {
  

  return (
    <div className={styles.container}>
      <p>------------------------</p>
      <p>Post ID: {id}</p>
      <p>avatar</p>
      <p>avatar : {avatar}</p>
      <img src={avatar || '/next.svg'} alt="Avatar" className={styles.avatar} />
      <p>{content}</p>
      <p>------------------------</p>
      {/* avatar */}
        <img src="https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" className={styles.avatar} /> 
      <p>Vehicles</p> 
      <p> . </p> 
      <p>7</p> 
      <p>hr.</p> 
      <p>ago</p> 
      <JoinButton />
      <h3>Is it feasible to create a world where the primary mode of transportation is trains, to the exclusion of automobiles and aircraft?</h3>
      <p></p>
<img 
  src='https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
/>
<AddComment />
      {/* Other content of the PostCard component */}
    </div>
  );
}

export default PostCard;
