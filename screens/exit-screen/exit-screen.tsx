import { TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ExitScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Exit</Text>
      <TouchableOpacity onPress={() => navigation.navigate('AuthScreen')}>
        <Text>exit button</Text>
      </TouchableOpacity>
    </View>
  );
};
