import { UnauthorizedStackParamList } from '@navigation/ParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useUnauthNavigation = () => {
  type NavigationProps = NativeStackNavigationProp<UnauthorizedStackParamList>;

  type Route = keyof UnauthorizedStackParamList;

  const navigation = useNavigation<NavigationProps>();
  const goTo = (to: Route) => {
    navigation.navigate(to);
  };

  return { goTo };
};
