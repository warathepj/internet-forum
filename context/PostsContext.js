// MessageContext.js
'use client'
import { createContext, useState, useContext } from 'react';

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [messages, setMessages] = useState([
    {
      id: "v1",
      content: "Crafting a world that seamlessly blends fantasy and technology can be tricky. This project aims for a unique atmosphere with trains powered by magic, traditional travel options, and a focus on medieval weaponry alongside fantastical creatures. The key is to ensure technology feels limited.  Imagine enchanted lanterns instead of electricity, and dwarven societies leading the way in intricate clockwork thanks to their advanced metalworking. Perhaps magic itself fuels these advancements, with alchemists or magical tools creating rudimentary machines. By establishing clear rules for both magic and technology, their interaction, and any limitations, you can create a world where the fantastical and the technological coexist in perfect harmony.  "
    },
    {
      id: "2",
      content: "Hello moon"
    }
  ]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessages() {
  return useContext(MessageContext);
}
