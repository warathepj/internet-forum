// app/components/Trend.js
// 'use client'
import Link from 'next/link';
// ... other imports ...

import PostCard from './PostCard';
import styles from './Trend.module.css';

export default function Trend() {
  const postId = 1; // Or fetch the actual post ID
  const postContent = "Some post content";

  return (
    <div className={styles.container}>
      <p>trend</p> 
      <Link href="/posts/1" className={styles.postCard}> {/* Wrap PostCard with Link */}
        <PostCard id={postId} content={postContent} />
      </Link>
    </div>
  );
}
