import styled from 'styled-components/native';

import * as styles from '../../styles/constant';

export const Image = styled.Image`
  width: 194px;
  height: 262px;
  border-radius: 10px;
  /* border: 1px ${styles.BLACK40}; */
  margin-bottom: 16px;
  align-self: center;
`;

export const ImageList = styled(Image)`
  max-width: 100px;
  height: 130px;
  border-radius: 5px;
  margin-bottom: 0;
  align-self: flex-start;
`;

export const ImageLarge = styled(Image)`
  max-width: 188px;
  width: 100%;
  height: 250px;
  align-self: center;
`;

export const NoImage = styled.View`
  width: 194px;
  height: 262px;
  border-radius: 10px;
  align-self: center;
  align-items: center;
  justify-content: center;
  background: ${styles.BLACK5};
  border: 1px ${styles.BLACK40};
  margin-bottom: 16px;
`;

export const NoImageList = styled(NoImage)`
  max-width: 100px;
  height: 130px;
  border-radius: 5px;
  margin-bottom: 0;
  align-self: flex-start;

  /* & svg {
    width: 24px;
    height: 24px;
  } */
`;

export const NoImageLarge = styled(NoImage)`
  max-width: 188px;
  width: 100%;
  height: 260px;
  align-self: center;
  border-radius: 10px;

  /* & svg {
    width: 48px;
    height: 48px;
  } */
`;
