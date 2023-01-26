import {ReactNode} from 'react';
import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface MainInputProps extends TextInputProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
  password?: boolean
}
