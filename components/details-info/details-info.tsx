import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { AppState } from '../../store/rootReducer';

import { Detail, DetailName, DetailText, DetailsTitle } from './styled-details-info';

export const DetailsInfo = () => {
  const { bookById } = useSelector((state: AppState) => state.bookById);

  const { publish, issueYear, pages, cover, format, weight, ISBN, producer } = bookById;

  const details = [
    { name: 'Издательство', text: publish },
    { name: 'Год издания', text: issueYear },
    { name: 'Страниц', text: pages },
    { name: 'Переплёт', text: cover },
    { name: 'Формат', text: format },
    { name: 'Жанр', text: weight },
    { name: 'ISBN', text: ISBN },
    { name: 'Изготовитель', text: producer },
  ];

  return (
    <View>
      <DetailsTitle>Подробная информация</DetailsTitle>
      {details.map((detail, index) => (
        <Detail key={index}>
          <DetailName>{detail.name}</DetailName>
          <DetailText>{detail.text}</DetailText>
        </Detail>
      ))}
    </View>
  );
};
