import { AuthorizedStackParamList } from '@navigation/ParamList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const useAuthNavigation = () => {
  type NavigationProps = NativeStackNavigationProp<AuthorizedStackParamList>;

  type Route = keyof AuthorizedStackParamList;

  const navigation = useNavigation<NavigationProps>();
  const goTo = (to: Route) => {
    navigation.navigate(to);
  };

  return { goTo };
};
