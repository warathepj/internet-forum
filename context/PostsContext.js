// context/PostsContext.js/
'use client'
import { createContext, useState, useContext } from 'react';

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: "v1",
      room: "Vehicles",
      posterId: 1,
      topic: "Is it feasible to create a world where the primary mode of transportation is trains, to the exclusion of automobiles and aircraft?",
      content: "Crafting a world that seamlessly blends fantasy and technology can be tricky. This project aims for a unique atmosphere with trains powered by magic, traditional travel options, and a focus on medieval weaponry alongside fantastical creatures. The key is to ensure technology feels limited.  Imagine enchanted lanterns instead of electricity, and dwarven societies leading the way in intricate clockwork thanks to their advanced metalworking. Perhaps magic itself fuels these advancements, with alchemists or magical tools creating rudimentary machines. By establishing clear rules for both magic and technology, their interaction, and any limitations, you can create a world where the fantastical and the technological coexist in perfect harmony.  ",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1584&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "g1",
      room: "Gadgets",
      posterId: 2,
      topic: "Ask people who use bluetooth headphones. Have you ever dropped them on the floor?",
      content: "",
      image: "https://images.unsplash.com/photo-1645020089405-ee44c2cd7c58?q=80&w=1422&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "s1",
      room: "Science",
      posterId: 2,
      topic: "Ask people who use bluetooth headphones. Have you ever dropped them on the floor?",
      content: "Why was the elevator button designed so that it couldn't be canceled?Why is it like, press and press?that I've ever encountered- The person pressed the wrong button because they probably remembered the wrong class. But I pressed it. It's a bit of a waste of time.- Probably intentionally pressed the wrong button to tease me. (There's no one inside the elevator.) But the button is stuck on almost every floor. Parking on every floor is a waste of time.)thank you",
      image: "https://plus.unsplash.com/premium_photo-1664392193530-29b0545e39d5?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
