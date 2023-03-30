import { View } from 'react-native';

import Down from '../../assets/svg/down.svg';
import Up from '../../assets/svg/up.svg';
import { SectionTitle } from '../../screens/book-screen/styled-book-screen';
import { Rating } from '../stars/rating';

import { dateFormatter } from '../../utils/date-formatter';

import {
  Comment,
  CommentsAmount,
  CommentsTitleWrapper,
  UserInfo,
  UserImage,
  UserName,
  CommentText,
} from './styled-comments';
import { CardButton } from '../button/card-button';

export const Comments = () => (
  <View>
    <CommentsTitleWrapper>
      <SectionTitle>Отзывы</SectionTitle>
      <CommentsAmount>2</CommentsAmount>
    </CommentsTitleWrapper>
    <Comment isOpen={true}>
      <UserInfo>
        <UserImage source={require('../../assets/png/review.png')} />
        <View>
          <UserName>Иван Иванов</UserName>
          <UserName>{dateFormatter('Fri Mar 29 2023 00:40:26 GMT+0300 (Москва, стандартное время)')}</UserName>
        </View>
      </UserInfo>
      <Rating amount={1} choice='' />
      <CommentText>{null}</CommentText>
    </Comment>
    <Comment isOpen={true}>
      <UserInfo>
        <UserImage source={require('../../assets/png/review.png')} />
        <View>
          <UserName>Иван Иванов</UserName>
          <UserName>{dateFormatter('Fri Mar 31 2023 00:40:26 GMT+0300 (Москва, стандартное время)')}</UserName>
        </View>
      </UserInfo>
      <Rating amount={3} choice='' />
      <CommentText>
        Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса
        для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет
        широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно
        упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам
        яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного
        выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно
        синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
      </CommentText>
    </Comment>
    <CardButton text='Оценить книгу' list='' choice='' bookpage='bookpage' />
  </View>
);
