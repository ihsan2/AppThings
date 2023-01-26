import React, {FunctionComponent, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {colors} from '../color';
import MainText from '../Text/MainText';

import {MainButtonProps} from './types';
import {ActivityIndicator} from 'react-native';

const MainButton: FunctionComponent<MainButtonProps> = props => {
  if (props.outline) {
    return (
      <>
        <TouchableOpacity {...props} style={[styles.buttonOutline, props.style]}>
          {props.loading ? (
            <ActivityIndicator color={colors.primary} />
          ) : (
            <MainText size={15} bold color={colors.primary}>
              {props.label}
            </MainText>
          )}
        </TouchableOpacity>
      </>
    );
  }

  if (props.clear) {
    return (
      <>
        <TouchableOpacity {...props} style={[styles.buttonClear, props.style]}>
          {props.loading ? (
            <ActivityIndicator color={colors.primary} />
          ) : (
            <MainText size={15} bold color={colors.primary}>
              {props.label}
            </MainText>
          )}
        </TouchableOpacity>
      </>
    );
  }

  return (
    <>
      <TouchableOpacity {...props} style={[styles.buttonSolid, props.style]}>
        {props.loading ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <MainText size={15} bold color={colors.white}>
            {props.label}
          </MainText>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  buttonSolid: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClear: {
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainButton;
