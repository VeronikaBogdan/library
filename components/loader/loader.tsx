import React from 'react';
import Lottie from 'lottie-react-native';

import { LoaderView } from './styled-loader';

export const Loader = () => {
  return (
    <LoaderView>
      <Lottie autoPlay loop source={require('../../assets/lotties/circles-loader.json')} />
    </LoaderView>
  );
};
