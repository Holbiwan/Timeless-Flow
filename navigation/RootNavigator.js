import React, { useState, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { AuthenticatedUserContext } from '../src/providers';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { auth } from '../config/firebaseConfig';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeAuthStateChanged = onAuthStateChanged(auth, (authenticatedUser) => {
      setUser(authenticatedUser || null);
      setIsLoading(false);
    });

    return unsubscribeAuthStateChanged;
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
