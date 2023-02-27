import React, { useState } from 'react';


const UserContext = React.createContext();

export function UserContextProvider({
  children,
}) {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const signin = (
    loginUser,
    newToken,
  ) => {
    setUser(loginUser);
    setToken(newToken);
    setLoggedIn(true);
  };

  const value = { user, signin, token, isLoggedIn };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useAuth = () => {
  return React.useContext(UserContext);
};
