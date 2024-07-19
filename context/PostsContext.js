// context/PostsContext.js
'use client'
import { createContext, useState, useContext } from 'react';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: "v1",
      room: "Vehicles",
      poster: "a",
      topic: "Is it feasible to create a world where the primary mode of transportation is trains, to the exclusion of automobiles and aircraft?",
      avatar: "https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Crafting a world that seamlessly blends fantasy and technology can be tricky. This project aims for a unique atmosphere with trains powered by magic, traditional travel options, and a focus on medieval weaponry alongside fantastical creatures. The key is to ensure technology feels limited.  Imagine enchanted lanterns instead of electricity, and dwarven societies leading the way in intricate clockwork thanks to their advanced metalworking. Perhaps magic itself fuels these advancements, with alchemists or magical tools creating rudimentary machines. By establishing clear rules for both magic and technology, their interaction, and any limitations, you can create a world where the fantastical and the technological coexist in perfect harmony.  ",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "2",
      topic: "Vehicles",
      avatar: "https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: "Hello moon",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

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
