import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/LoginScreen';
import React from 'react';
import { AppRoutes } from './types/AppRoutes';

const UnauthorizedRoute = createNativeStackNavigator();

const UnauthorizedRouter = () => {
  return (
    <UnauthorizedRoute.Navigator screenOptions={{ headerShown: false }}>
      <UnauthorizedRoute.Screen
        name={AppRoutes.Login}
        component={LoginScreen}
      />
    </UnauthorizedRoute.Navigator>
  );
};

export default UnauthorizedRouter;
