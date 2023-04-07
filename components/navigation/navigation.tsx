import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';

import { BookScreen } from '../../screens/book-screen/book-screen';
import { MainScreen } from '../../screens/main-screen/main-screen';
import { OfferScreen } from '../../screens/terms-offer-screen/offer-screen';
import { TermsScreen } from '../../screens/terms-offer-screen/terms-screen';

import { categoriesRequest } from '../../store/categories/actions';
import { CategoriesState } from '../../store/rootReducer';

import * as styles from '../../styles/constant';

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();

  const { categories, pending, error } = useSelector((state: CategoriesState) => state.categories);

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch]);

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: styles.BLACK5 },
            headerTintColor: styles.DARK,
            headerTitleStyle: { fontSize: 24 },
          }}
        >
          <Drawer.Screen
            name='AllBooks'
            component={MainScreen}
            options={{
              drawerLabel: 'Все книги',
              title: 'Библиотека / Все книги',
              drawerActiveTintColor: styles.ORANGE,
            }}
          />
          {!pending &&
            !error &&
            categories.map((category, index) => (
              <Drawer.Screen
                key={index}
                name={category.path}
                component={MainScreen}
                options={{
                  drawerLabel: category.name,
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
    </>
  );
};
