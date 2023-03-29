import { DARK, BLACK70 } from './../../styles/constant';
import styled from 'styled-components/native';

export const Description = styled.View`
  margin: 6px 0 0;
`;

export const TitleLarge = styled.Text`
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.3px;
  color: ${DARK};
`;

export const AuthorLarge = styled.Text`
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  margin: 8px 0 35px;
  color: ${BLACK70};
`;

export const AboutBookTitle = styled(TitleLarge)`
  margin-top: 16px;
`;

export const AboutBookText = styled(AuthorLarge)`
  color: ${DARK};
`;
