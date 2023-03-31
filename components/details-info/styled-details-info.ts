import styled from 'styled-components/native';

import { SectionTitle } from './../../screens/book-screen/styled-book-screen';

import { BLACK40, DARK } from '../../styles/constant';

export const DetailsTitle = styled(SectionTitle)`
  margin: 25px 0 15px;
`;

export const Detail = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const DetailName = styled.Text`
  flex: 1;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: ${BLACK40};
`;

export const DetailText = styled(DetailName)`
  flex: 1;
  font-weight: 300;
  color: ${DARK};
`;
