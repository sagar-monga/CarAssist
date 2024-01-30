import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthorizedRouter from './AuthorizedRouter';
import UnauthorizedRouter from './UnauthorizedRouter';
import { BaseRouter } from './types/AppRoutes';

const BaseStack = createNativeStackNavigator();

const Router = () => {
  const isLoggedIn = false;
  return (
    <BaseStack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <BaseStack.Screen
          name={BaseRouter.Authorized}
          component={AuthorizedRouter}
        />
      ) : (
        <BaseStack.Screen
          name={BaseRouter.Unauthorized}
          component={UnauthorizedRouter}
        />
      )}
    </BaseStack.Navigator>
  );
};

export default Router;
