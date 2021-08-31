import React, { useState, createContext, useContext } from "react";

export const Session = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const contextValue = {
    user,
    setUser,
  };

  return (
    <Session.Provider value={ contextValue }>
      { children }
    </Session.Provider>
  );
}

const useSession = ({ children }) => {

  
}

export default useSession
