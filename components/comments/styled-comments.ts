import { Image } from 'react-native';
import styled from 'styled-components/native';

import { BLACK40, BLACK70, DARK } from '../../styles/constant';

export const CommentsTitleWrapper = styled.Pressable`
  flex-direction: row;
  margin: 25px 0 0;
  padding-vertical: 5px;
  align-items: center;
`;

export const CommentsAmount = styled.Text`
  margin-horizontal: 10px;
  padding-top: 3px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: ${BLACK40};
`;

type CommentProps = {
  isOpen: boolean;
};

export const Comment = styled.View`
  margin-bottom: 13px;
  display: ${({ isOpen }: CommentProps) => (isOpen ? 'flex' : 'none')};
`;

export const UserInfo = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled(Image)`
  width: 45px;
  height: 45px;
`;

export const UserName = styled.Text`
  margin-left: 24px;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: ${BLACK70};
`;

export const CommentText = styled.Text`
  margin-top: 10px;
  font-weight: 300;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.1px;
  color: ${DARK};
`;
