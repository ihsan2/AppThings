import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {colors} from '../color';

import {MainTextProps} from './types';

const MainText: FunctionComponent<MainTextProps> = props => {
  const fontWeight = props.bold ? 'bold' : 'normal';
  const color = props.color || colors.black;
  const fontSize = props.size || 14;
  return (
    <>
      <Text {...props} style={[{fontWeight, color, fontSize}, props.style]}>
        {props.children}
      </Text>
    </>
  );
};

export default MainText;
