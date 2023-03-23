import { Image, Text } from 'react-native';

import { Rating } from '../stars/rating';

import { Author, Title, StyledCard } from './styled-card-grid';

export const CardGrid = () => (
  <StyledCard activeOpacity={0.5}>
    <Image source={require('../../assets/png/avatar.png')} />
    <Rating amount={0 - 1} />
    <Title numberOfLines={3}>Гарри Поттер и Философский камень</Title>
    <Author numberOfLines={3}>Джоан Кэтлин Роулинг</Author>
  </StyledCard>
);
