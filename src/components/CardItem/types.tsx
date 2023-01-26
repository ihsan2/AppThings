import {TouchableOpacityProps, StyleProp, ViewStyle} from 'react-native';

export interface CardItemProps extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>;
  name: string;
  imageUrl: string;
}
