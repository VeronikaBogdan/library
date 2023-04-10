import { ScrollView } from 'react-native';

import Slash from '../../assets/svg/slash.svg';
import { CardLarge } from '../../components/card-large/card-large';
import { Comments } from '../../components/comments/comments';
import { DetailsInfo } from '../../components/details-info/details-info';
import { RatingBook } from '../../components/rating-book/rating-book';

import { categoryIdSwitcher } from '../../utils/category-id-switcher';

import { BreadCrumbsText, BreadCrumbsWrapper, ViewWrapper } from './styled-book-screen';

type BookScreenProps = { route: any };

export const BookScreen = ({ route }: BookScreenProps) => {
  const { bookId, category } = route.params;

  return (
    <ScrollView>
      <BreadCrumbsWrapper>
        <BreadCrumbsText>
          {categoryIdSwitcher(category)} / Грокаем алгоритмы. Иллюстрированное пособие программистов и любопытствующих
          {/* {categoryIdSwitcher(category)}
          <Slash /> Грокаем алгоритмы. Иллюстрированное пособие программистов и любопытствующих */}
        </BreadCrumbsText>
      </BreadCrumbsWrapper>
      <ViewWrapper>
        <CardLarge />
        <RatingBook />
        <DetailsInfo />
        <Comments />
      </ViewWrapper>
    </ScrollView>
  );
};
