import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BookScreen } from './screens/book-screen/book-screen';
import { MainScreen } from './screens/main-screen/main-screen';
import { OfferScreen } from './screens/terms-offer-screen/offer-screen';
import { TermsScreen } from './screens/terms-offer-screen/terms-screen';

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
          <Stack.Screen
            name='BookScreen'
            component={BookScreen}
            options={{
              title: 'Библиотека',
            }}
          />
          <Stack.Screen
            name='TermsScreen'
            component={TermsScreen}
            options={{
              title: 'Библиотека',
            }}
          />
          <Stack.Screen
            name='OfferScreen'
            component={OfferScreen}
            options={{
              title: 'Библиотека',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
