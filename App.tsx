import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';

import { BookScreen } from './screens/book-screen/book-screen';
import { MainScreen } from './screens/main-screen/main-screen';
import { OfferScreen } from './screens/terms-offer-screen/offer-screen';
import { TermsScreen } from './screens/terms-offer-screen/terms-screen';

import store from './store/configureStore';

import * as styles from './styles/constant';

const Drawer = createDrawerNavigator();

const categories = [
  { name: 'MainScreen', drawerLabel: 'все книги' },
  { name: 'Business', drawerLabel: 'бизнес' },
  { name: 'Children', drawerLabel: 'дети' },
];

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style='dark' />
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: styles.BLACK5 },
              headerTintColor: styles.DARK,
              headerTitleStyle: { fontSize: 24 },
              // contentStyle: { backgroundColor: styles.WHITE },
            }}
          >
            {categories.map((category, index) => (
              <Drawer.Screen
                key={index}
                name={category.name}
                component={MainScreen}
                options={{
                  drawerLabel: category.drawerLabel,
                  title: 'Библиотека',
                  drawerActiveTintColor: styles.ORANGE,
                }}
              />
            ))}
            <Drawer.Screen
              name='BookScreen'
              component={BookScreen}
              options={{
                drawerLabel: 'Страница книги',
                title: 'Библиотека',
                drawerItemStyle: { height: 0 },
              }}
            />
            <Drawer.Screen
              name='TermsScreen'
              component={TermsScreen}
              options={{
                drawerLabel: 'Договор',
                title: 'Библиотека',
              }}
            />
            <Drawer.Screen
              name='OfferScreen'
              component={OfferScreen}
              options={{
                drawerLabel: 'Оффер',
                title: 'Библиотека',
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
