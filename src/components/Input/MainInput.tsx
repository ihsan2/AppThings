import React, {FunctionComponent, useState} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {colors} from '../color';
import MainText from '../Text/MainText';
import Icon from 'react-native-vector-icons/Ionicons';

import {MainInputProps} from './types';

const MainInput: FunctionComponent<MainInputProps> = props => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <View style={props.style}>
        {props.label ? (
          <MainText color={colors.text} style={styles.label}>
            {props.label}
          </MainText>
        ) : null}
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            style={styles.input}
            secureTextEntry={props.password && !showPassword}
          />
          {props.password && (
            <TouchableOpacity onPress={onShowPassword}>
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                color={colors.gray}
                size={16}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  input: {
    flex: 1,
    marginRight: 16,
  },
  label: {
    marginBottom: 8,
  },
});

export default MainInput;
