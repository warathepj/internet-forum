// context/UsersContext.js/
// from context/UsersContext.js/ how to render all users in
'use client'
import { createContext, useState, useContext } from 'react';

const UsersContext = createContext();

const UsersProvider = ({ children }) => {
    // render context/UsersContext.js/users in
  const [users, setUsers] = useState([
      
      { 
        id: 1, 
        name: "ZenMaster", 
        avatar: "https://plus.unsplash.com/premium_photo-1688045722767-8d8672f6950b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        comments: [
            {
                postId: "v1",
                comment: ""
            }
        ]

        
    },
    { id: 2, name: "CoffeeLover", comments: [] }, 
    { id: 3, name: "AwkwardPenguin", comments: [] },
    { id: 4, name: "YodaIsMyHomeboy", comments: [] },
    { id: 5, name: "WanderlustExplorer", comments: [] }
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );

}

// export const useUsers = () => useContext(UsersContext);

export function useUsers() {
    return useContext(UsersContext);
  }

  export { UsersProvider };
  