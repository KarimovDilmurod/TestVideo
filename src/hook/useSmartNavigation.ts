import {useNavigation} from '@react-navigation/native';

const useSmartNavigation = () => {
  const navigation = useNavigation();

  return navigation;
};

export default useSmartNavigation;
