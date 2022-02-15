import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {LINEARGRADIENT} from '../../constants/colors';
import {scale} from 'react-native-size-matters';
const FilterButton = ({children, onPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.filter}
      activeOpacity={0.7}
      onPress={onPress}>
      <LinearGradient colors={LINEARGRADIENT} style={styles.filter}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  filter: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
