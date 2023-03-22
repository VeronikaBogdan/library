import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      font-size: 14px;

      @media (min-width: 480px) {
        font-size: 14px;
      }
      @media (min-width: 768px) {
        font-size: 16px;
      }
      @media (min-width: 1440px) {
        font-size: 18px;
      }
      @media (min-width: 1600px) {
        font-size: 20px;
      }
    }

  #root{
    display: flex;
    flex-direction: column;
  }
`;
