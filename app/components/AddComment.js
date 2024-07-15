// app/components/AddComment.js
import React from 'react';
import styles from './AddComment.module.css'; // Import CSS module if needed

export default function AddComment() {
  return (
    <div>
      <button className={styles.addButton}>
        <h5>+</h5>
        <p>Add Comment</p>
    </button>
      {/* Other content of the AddComment component */}
    </div>
  );
}
