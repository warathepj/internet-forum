// context/PostsContext.js
'use client'
import { createContext, useState, useContext } from 'react';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: "v1",
      avatar: "https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Crafting a world that seamlessly blends fantasy and technology can be tricky. This project aims for a unique atmosphere with trains powered by magic, traditional travel options, and a focus on medieval weaponry alongside fantastical creatures. The key is to ensure technology feels limited.  Imagine enchanted lanterns instead of electricity, and dwarven societies leading the way in intricate clockwork thanks to their advanced metalworking. Perhaps magic itself fuels these advancements, with alchemists or magical tools creating rudimentary machines. By establishing clear rules for both magic and technology, their interaction, and any limitations, you can create a world where the fantastical and the technological coexist in perfect harmony.  "
    },
    {
      id: "2",
      avatar: "https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Hello moon"
    }
  ]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  return useContext(PostsContext);
}
