import styled from 'styled-components/native';
import { BLACK70, BLACK40, WHITE } from '../../../styles/constant';

export const RateText = styled.Text`
  margin-top: 30px;
  text-align: center;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
`;

export const RatingInput = styled.TextInput`
  width: 100%;
  background-color: ${WHITE};
  color: ${BLACK70};
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  padding: 5px;
  border-color: ${BLACK40};
  border-width: 1px;
  border-radius: 16px;
  text-align: center;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  min-height: 25px;
  height: 30%;
  background-color: ${WHITE};
  color: ${BLACK70};
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  padding: 5px;
  border-color: ${BLACK40};
  border-width: 1px;
  border-radius: 16px;
`;
