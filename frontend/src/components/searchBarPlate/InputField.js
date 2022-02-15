import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {HEADINGCOLOR, PRIMARY, SECONDARY} from '../../constants/colors';
import SearchPlate from './SearchPlate';
import {useNavigation} from '@react-navigation/core';
import {FORGOT_PASSWORD} from '../../constants/routeNames';
const InputField = ({
  children,
  title,
  style,
  rowtitle,
  row,
  regular,
  searchStyle,
}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.fieldContainer, ...style}}>
      {row && (
        <View style={styles.row}>
          <Text
            style={{
              ...styles.filedHeading,
              paddingHorizontal: 0,
            }}>
            {rowtitle}
          </Text>
          <TouchableOpacity
            style={styles.forgotPassContainer}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(FORGOT_PASSWORD)}>
            <Text
              style={{
                ...styles.filedHeading,
                paddingHorizontal: 0,
                color: PRIMARY,
              }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {regular && <Text style={styles.filedHeading}>{title}</Text>}
      <SearchPlate style={searchStyle}>{children}</SearchPlate>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  fieldContainer: {
    width: '100%',
    padding: scale(2),
    justifyContent: 'center',
    marginTop: scale(15),
  },
  filedHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    paddingHorizontal: scale(16),
    marginBottom: scale(10),
    color: HEADINGCOLOR,
  },
  forgotPassContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: scale(15),
  },
});
