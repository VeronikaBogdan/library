import styled from 'styled-components';

import * as styles from '../../../styles/constant';

export const Image = styled.img`
  max-width: 174px;
  width: 100%;
  height: 242px;
  border-radius: 10px;
  border: 1px solid ${styles.BLACK40};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    max-width: 174px;
    width: 100%;
    align-self: center;
    border-radius: 3px;
  }
  @media (max-width: 320px) {
    border-radius: 10px;
  }
`;

export const ImageList = styled(Image)`
  max-width: 120px;
  height: 170px;
  border-radius: 3px;
  margin-bottom: 0;
  align-self: flex-start;

  @media (max-width: 320px) {
    max-width: 70px;
    width: 100%;
    height: auto;
  }
`;

export const ImageLarge = styled(Image)`
  max-width: 445px;
  width: 100%;
  height: 593px;
  align-self: flex-start;

  @media (max-width: 768px) {
    max-width: 136px;
    width: 100%;
    height: 198px;
  }

  @media (max-width: 320px) {
    max-width: 188px;
    width: 100%;
    height: 250px;
    align-self: center;
  }
`;

export const NoImage = styled.div`
  width: 174px;
  height: 242px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9fa;
  border: 1px solid ${styles.BLACK40};
  margin-bottom: 16px;
  border-radius: 10px;

  @media (max-width: 768px) {
    max-width: 174px;
    width: 100%;
    align-self: center;
    border-radius: 3px;
  }

  @media (max-width: 320px) {
    border-radius: 10px;
  }
`;

export const NoImageList = styled(NoImage)`
  max-width: 120px;
  height: 170px;
  border-radius: 3px;
  margin-bottom: 0;
  align-self: flex-start;

  & svg {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 320px) {
    max-width: 70px;
    width: 100%;
    height: 100px;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const NoImageLarge = styled(NoImage)`
  max-width: 445px;
  width: 100%;
  height: 593px;
  align-self: flex-start;
  border-radius: 10px;

  & svg {
    width: 56px;
    height: 56px;
  }

  @media (max-width: 768px) {
    max-width: 136px;
    width: 100%;
    height: 198px;
    border-radius: 3px;

    & svg {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 320px) {
    max-width: 188px;
    width: 100%;
    height: 260px;
    align-self: center;
    border-radius: 10px;

    & svg {
      width: 48px;
      height: 48px;
    }
  }
`;
