//AuthenticatedUserProvider.js
import React, { useState, createContext } from 'react';

// Create a context to share the authenticated user state across the app
export const AuthenticatedUserContext = createContext({});

// Provide the authenticated user context to all components in the app
export const AuthenticatedUserProvider = ({ children }) => {
  // State to store the authenticated user
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children} {/* Render child components that need access to the context */}
    </AuthenticatedUserContext.Provider>
  );
};
