import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from 'react-native-size-matters';
import {iconSize} from '../../constants/iconSize';
import {BLACK, PRIMARY} from '../../constants/colors';
import {NOTIFI} from '../../tempData/tempText';
const CashbackTextComponent = ({title}) => {
  return (
    <View style={styles.container}>
      <Feather name="user-check" size={iconSize + 5} color={PRIMARY} />
      <View style={styles.textBox}>
        <Text style={styles.stepText}>{title}</Text>
        <Text
          style={{
            ...styles.stepText,
            fontFamily: 'Poppins-Regular',
            color: BLACK,
          }}>
          {NOTIFI}
        </Text>
      </View>
    </View>
  );
};

export default CashbackTextComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  textBox: {flex: 1, marginLeft: scale(10)},
  stepText: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: BLACK,
  },
});
