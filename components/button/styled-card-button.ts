import styled from 'styled-components/native';

import * as styles from '../../styles/constant';

export const Button = styled.View`
  align-items: center;
  justify-content: center;
  background: ${styles.ORANGE};
  color: ${styles.WHITE};
  height: 40px;
`;

export const GridBookButton = styled(Button)`
  flex: 1;
  border-radius: 20px;
  margin-bottom: 16px;
  align-self: center;

  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
`;

export const BookedGridButton = styled(GridBookButton)`
  background: ${styles.WHITE};
  border: 1px ${styles.BLACK20};
  color: ${styles.DARK};
`;

export const IsTakendGridButton = styled(GridBookButton)`
  background: ${styles.BLACK5};
  border: 1px ${styles.BLACK20};
  color: ${styles.BLACK40};
  elevation: 0;
`;

export const ListBookButton = styled(GridBookButton)`
  position: static;
`;

export const BookedListButton = styled(BookedGridButton)`
  position: static;
`;

export const IsTakendListButton = styled(IsTakendGridButton)`
  position: static;
`;

export const BookPageButton = styled(ListBookButton)`
  max-width: 350px;
  align-self: flex-start;

  &.review {
    background: ${styles.BGPRESSED};
    margin-top: 10px;

    @media (max-width: 768px) {
      max-width: 640px;
    }
  }
`;

export const BookedPageButton = styled(BookedListButton)`
  max-width: 350px;
  align-self: flex-start;
`;

export const IsTakendPagetButton = styled(IsTakendListButton)`
  max-width: 350px;
  align-self: flex-start;
`;
