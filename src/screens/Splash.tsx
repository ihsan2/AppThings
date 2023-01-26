import {StyleSheet} from 'react-native';
import React, {FC, useCallback, useEffect, useState} from 'react';
import MainContainer from '../components/Container/MainContainer';
import {useStore} from '../store';
import {ActivityIndicator} from 'react-native';
import {colors} from '../components/color';
import * as NavigationService from '../navigation/navigationService';
import _ from 'lodash';

const Splash: FC = ({navigation}: any) => {
  const token = useStore(state => state.token);

  useEffect(() => {
    setTimeout(() => {
      checkAuth();
    }, 500);
  }, [token]);

  const checkAuth = () => {
    if (token) {
      NavigationService.resetTo('Home');
    } else {
      NavigationService.resetTo('Login');
    }
  };

  return (
    <MainContainer style={styles.container}>
      <ActivityIndicator color={colors.primary} size={'large'} />
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
});

export default Splash;
