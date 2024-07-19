// from params.id in app/posts/[id]/page.js/
"use client"
import { useParams } from 'next/navigation';
import PostCard from '../../components/PostCard';
import { usePosts } from '../../../context/PostsContext';

export default function PostsPage() {
  const params = useParams(); // Get the URL parameters
  const postId = params.id;  // Extract the 'id'
  const { posts } = usePosts();
  const post = posts.find(post => post.id === postId); 
  if (!post) {
    return <div>Post not found</div>; // Handle cases where the post doesn't exist
  }

  return (
    <div>
      <p>Post ID: {postId}</p>
      <PostCard id={post.id} avatar={post.avatar} room={post.room}  
        poster={post.poster}
        topic={post.topic} content={post.content} image={post.image} />  
      {/* <PostCard id={postId} avatar={avatar} /> */}
      {/* ... other content for your PostsPage ... */}
    </div>
  );
}
