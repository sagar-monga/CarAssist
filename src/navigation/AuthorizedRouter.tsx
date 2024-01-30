import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import React from 'react';
import { AppRoutes } from './types/AppRoutes';

const AuthorizedRoute = createNativeStackNavigator();

const AuthorizedRouter = () => {
  return (
    <AuthorizedRoute.Navigator>
      <AuthorizedRoute.Screen name={AppRoutes.Home} component={HomeScreen} />
    </AuthorizedRoute.Navigator>
  );
};

export default AuthorizedRouter;
