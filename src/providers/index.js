import React, { createContext, useState, useContext } from "react";

// Create the context
const AuthenticatedUserContext = createContext();

// Create the provider component
export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

// Custom hook for consuming the AuthenticatedUserContext
export const useAuthenticatedUser = () => useContext(AuthenticatedUserContext);

// Export everything from one place
export { AuthenticatedUserContext };
