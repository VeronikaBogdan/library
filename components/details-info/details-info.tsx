import { View } from 'react-native';

import { Detail, DetailName, DetailText, DetailsTitle } from './styled-details-info';

export const DetailsInfo = () => {
  const details = [
    { name: 'Издательство', text: 'Питер' },
    { name: 'Год издания', text: '2019' },
    { name: 'Страниц', text: '288' },
    { name: 'Переплёт', text: 'Мягкая обложка' },
    { name: 'Формат', text: '70x100' },
    { name: 'Жанр', text: '370г' },
    { name: 'ISBN', text: '978-5-4461-0923-4' },
    {
      name: 'Изготовитель',
      text: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    },
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
