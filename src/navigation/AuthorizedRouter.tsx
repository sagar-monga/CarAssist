import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCarScreen from '@screens/AddCarScreen';
import CarListScreen from '@screens/CarListScreen';
import React from 'react';
import { AuthorizedStackParamList } from './ParamList';
import { AppRoutes } from './types/AppRoutes';

const AuthorizedRoute = createNativeStackNavigator<AuthorizedStackParamList>();

const AuthorizedRouter = () => {
  return (
    <AuthorizedRoute.Navigator screenOptions={{ headerShown: false }}>
      <AuthorizedRoute.Screen
        name={AppRoutes.CarList}
        component={CarListScreen}
      />
      <AuthorizedRoute.Screen
        name={AppRoutes.AddCar}
        component={AddCarScreen}
      />
    </AuthorizedRoute.Navigator>
  );
};

export default AuthorizedRouter;
