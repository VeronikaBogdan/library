import styled from 'styled-components/native';

import { BLACK70, DARK } from '../../../styles/constant';

export const SearchInput = styled.TextInput`
  flex: 1;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: ${DARK};
`;

export const SearchWrapper = styled.View`
  display: ${({ isOpenSearch }: { isOpenSearch: boolean }) => (isOpenSearch ? 'flex' : 'none')};
  padding: 7px 15px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  shadow-color: ${BLACK70};
  elevation: 13;
  border-radius: 35px;
  /* height: 50px; */
  background-color: white;
`;
