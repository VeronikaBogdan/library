import { BLACK5 } from './../../styles/constant';
import styled from 'styled-components/native';

import * as styles from '../../styles/constant';

export const ViewWrapper = styled.View`
  padding: 16px 16px 8px;
`;

export const BreadCrumbsWrapper = styled.View`
  background-color: ${BLACK5};
  padding: 20px 0px 20px 16px;
`;

export const BreadCrumbsText = styled.Text`
  color: ${styles.BLACK40};
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;
