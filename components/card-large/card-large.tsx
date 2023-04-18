import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { BOOKPAGE } from '../../app-constants';

import { BookImage } from '../book-image/book-image';
import { CardButton } from '../button/card-button';

import { bookByIdRequest } from '../../store/bookById/actions';
import { AppState } from '../../store/rootReducer';

import { AboutBookText, AboutBookTitle, AuthorLarge, Description, TitleLarge } from './styled-card-large';

export const CardLarge = ({ bookId }: { bookId: number }) => {
  // const dispatch = useDispatch();

  // const { bookById, pending } = useSelector((state: AppState) => state.bookById);

  // useEffect(() => {
  //   dispatch(bookByIdRequest(bookId));
  // }, [dispatch]);

  return (
    <View>
      <BookImage image={null} choice={BOOKPAGE} bookpage='' />
      <Description>
        <TitleLarge>Грокаем алгоритмы. Иллюстрированное пособие программистов и любопытствующих</TitleLarge>
        <AuthorLarge>Адитья Бхаргава, 2019</AuthorLarge>
        <CardButton text='Забронировать' list='' choice='' bookpage='bookpage' />
        <AboutBookTitle>О книге</AboutBookTitle>
        <AboutBookText>
          Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были
          кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
          изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
          время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
          алгоритмы — это веселое и увлекательное занятие.
        </AboutBookText>
      </Description>
    </View>
  );
};
