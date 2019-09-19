import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import Colors from '../constants/Colors';

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  border: {
    borderColor: Colors.borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
};

export const getPixelSizeForLayoutSize = params => PixelRatio.getPixelSizeForLayoutSize(params)
export const getFontScale = params => params * PixelRatio.getFontScale()
export const sourceIdForCalendar = 'Календарь'