import { BLACK5 } from './../../styles/constant';
import styled from 'styled-components/native';

import { SectionTitle } from '../../screens/book-screen/styled-book-screen';

export const RatingTitle = styled(SectionTitle)`
  margin: 5px 0 10px;
`;

export const RatingWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border-top: 5px solid ${BLACK5};
`;

export const RatingNumber = styled(SectionTitle)`
  font-size: 26px;
  margin-left: 25px;
`;

export const NoRatingText = styled(RatingNumber)`
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  margin-left: 2px;
  margin-top: 10px;
`;
