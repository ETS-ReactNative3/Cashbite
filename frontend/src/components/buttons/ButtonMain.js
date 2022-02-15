import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN} from '../../constants/colors';
import {windowWidth} from '../../utils/dimensions';

const ButtonMain = ({children, style, onPress}) => {
  return (
    <TouchableOpacity
      style={{...styles.buttonContainer, ...style}}
      activeOpacity={0.7}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonMain;

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    borderRadius: scale(50),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowWidth * 0.135,
    backgroundColor: SCREEN,
  },
});
