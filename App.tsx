import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainScreen } from './screens/main-screen/main-screen';

import * as styles from './styles/constant';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: styles.WHITE },
            headerTintColor: styles.DARK,
            headerTitleStyle: { fontSize: 24 },
            contentStyle: { backgroundColor: styles.WHITE },
          }}
        >
          <Stack.Screen
            name='MainScreen'
            component={MainScreen}
            options={{
              title: 'Библиотека',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
