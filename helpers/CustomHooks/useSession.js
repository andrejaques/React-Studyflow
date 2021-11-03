import React, { useState, createContext, useContext } from "react";

const Session = createContext();

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
};

const useSession = () => {
  const { user, setUser } = useContext(Session);
  
  return [user, setUser];
};

export default useSession;

// index.js

/*
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { sessionProvider } from '.customHooks/useSession'

ReactDOM.render(
  <sessionProvider>
    <App />
  </sessionProvider>,
  document.getElementById('root')
)
*/
