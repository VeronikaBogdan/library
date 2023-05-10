import styled from 'styled-components/native';

import * as styles from '../../styles/constant';
import { Author, HighlightTitle, StyledCard } from '../card-grid/styled-card-grid';

export const StyledCardList = styled(StyledCard)`
  flex-direction: row;
  border-radius: 12px;
  padding: 16px 16px 16px 8px;
`;

export const Wrapper = styled.View`
  flex-direction: column;
  flex: 1;
  margin-left: 8px;
`;

export const TitleList = styled(HighlightTitle)`
  margin-top: 0;
`;

export const AuthorList = styled(Author)`
  font-weight: 400;
  color: ${styles.BLACK70};
  margin-top: 3px;
  letter-spacing: 0.1px;
  font-size: 18px;
  line-height: 24px;
`;
