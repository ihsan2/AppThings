import {ReactNode} from 'react';
import { StyleProp, TextStyle, TextProps } from 'react-native';

export interface MainTextProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  size?: number;
  bold?: boolean;
  color?: string;
}
