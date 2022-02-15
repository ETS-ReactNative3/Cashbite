import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SEARCHBAR} from '../../constants/colors';
import {scale} from 'react-native-size-matters';
import {windowHeight, windowWidth} from '../../utils/dimensions';
const SearchPlate = ({children, style}) => {
  return <View style={{...styles.container, ...style}}>{children}</View>;
};

export default SearchPlate;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: scale(50),
    overflow: 'hidden',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: windowWidth * 0.15,
    backgroundColor: SEARCHBAR,
    paddingHorizontal: scale(15),
  },
});
