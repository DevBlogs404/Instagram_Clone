import {TextStyle} from 'react-native';

const Size = {
  xs: 10,
  sm: 12,
  default: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 28,
};

const Weight: {[key: string]: TextStyle['fontWeight']} = {
  heavy: '900',
  semiBold: '600',
  bold: 'bold',
  normal: 'normal',
  light: '400',
};

export {Size, Weight};
