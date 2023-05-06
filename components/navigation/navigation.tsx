import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';

import { AuthScreen } from '../../screens/auth-screen/auth-screen';
import { BookScreen } from '../../screens/book-screen/book-screen';
import { MainScreen } from '../../screens/main-screen/main-screen';
import { RegistrationScreen } from '../../screens/registration-screen/registration-screen';
import { OfferScreen } from '../../screens/terms-offer-screen/offer-screen';
import { TermsScreen } from '../../screens/terms-offer-screen/terms-screen';
import { ExitScreen } from '../../screens/exit-screen/exit-screen';

import { categoriesRequest } from '../../store/categories/actions';
import { booksRequest } from '../../store/books/actions';
import { AppState } from '../../store/rootReducer';

import * as styles from '../../styles/constant';

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  const dispatch = useDispatch();

  const {
    categories,
    pending: isPendingCategories,
    error: isErrorCategories,
  } = useSelector((state: AppState) => state.categories);
  const { books, pending: isPendingBooks, error: isErrorBooks } = useSelector((state: AppState) => state.books);

  const isPending = isPendingCategories || isPendingBooks;
  const isError = isErrorBooks || isErrorCategories;
  const isVisible = !isPending && !isError;

  const showAmountOfBooks = (category: string) => books.filter((book) => book.categories.includes(category)).length;

  useEffect(() => {
    dispatch(categoriesRequest());
    dispatch(booksRequest());
  }, [dispatch]);

  return (
    <>
      <StatusBar style='dark' backgroundColor={styles.WHITE} />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='AuthScreen'
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
          <Drawer.Screen
            name='AuthScreen'
            component={AuthScreen}
            options={{
              drawerLabel: 'Авторизация',
              title: 'Cleverland',
              drawerItemStyle: { height: 0 },
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name='RegistrationScreen'
            component={RegistrationScreen}
            options={{
              drawerLabel: 'Регистрация',
              title: 'Cleverland',
              drawerItemStyle: { height: 0 },
              headerShown: false,
            }}
          />
          {isVisible &&
            categories.map((category, index) => (
              <Drawer.Screen
                key={index}
                name={category.path}
                component={MainScreen}
                options={{
                  drawerLabel: `${category.name} ${showAmountOfBooks(category.name)}`,
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
          <Drawer.Screen
            name='exit'
            component={ExitScreen}
            options={{
              drawerLabel: 'Выход',
              title: 'Библиотека',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};
