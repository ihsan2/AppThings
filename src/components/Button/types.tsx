import {ReactNode} from 'react';
import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

export interface MainButtonProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  label?: string;
  outline?: boolean;
  clear?: boolean;
  loading?: boolean;
}
