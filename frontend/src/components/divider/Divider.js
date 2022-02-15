import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {DIVIDER, PLACEHOLDERTEXT} from '../../constants/colors';
const Divider = ({style}) => {
  return <View style={{...styles.container, ...style}} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: DIVIDER,
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: scale(10),
  },
});
