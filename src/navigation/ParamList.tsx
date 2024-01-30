import { AppRoutes } from './types/AppRoutes';

export type AuthorizedStackParamList = {
  [AppRoutes.CarList]: undefined;
  [AppRoutes.AddCar]: undefined;
};

export type UnauthorizedStackParamList = {
  [AppRoutes.Login]: undefined;
};
