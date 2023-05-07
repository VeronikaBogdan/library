import styled from 'styled-components/native';

import { BGPOSITIVE, BGNEGATIVE } from './../../../styles/constant';

export const CentralizedView = styled.View`
  height: 100%;
  justify-content: center;
  background-color: ${({ status }: { status: boolean }) => (status ? BGPOSITIVE : BGNEGATIVE)};
`;
