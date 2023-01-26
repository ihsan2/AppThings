import React, {FunctionComponent} from 'react';
import {StatusBar} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {colors} from '../color';

import {ContainerProps} from './types';

const MainContainer: FunctionComponent<ContainerProps> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <StatusBar backgroundColor={colors.primary} />
      <>{props.children}</>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
});

export default MainContainer;
