import {createContext, useState} from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
    
  const handleSetUser = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const handleClearUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{user,setUser: handleSetUser, clearUser: handleClearUser}}>
      {children}
    </UserContext.Provider>
  );
}