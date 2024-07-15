// app/components/Trend.js
// 'use client'
import PostCard from './PostCard';
import styles from './Trend.module.css';

export default function Trend() {
  return (
    <div className={styles.container}>
      <p>trend</p> 
      <PostCard />
    </div>
  );
}
