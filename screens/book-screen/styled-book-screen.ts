import styled from 'styled-components/native';

import { BLACK5, BLACK40, DARK } from './../../styles/constant';

export const ViewWrapper = styled.View`
  padding: 16px 16px 8px;
`;

export const BreadCrumbsWrapper = styled.View`
  background-color: ${BLACK5};
  padding: 20px 0px 20px 16px;
`;

export const BreadCrumbsText = styled.Text`
  color: ${BLACK40};
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

export const SectionTitle = styled.Text`
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.3px;
  color: ${DARK};
`;
