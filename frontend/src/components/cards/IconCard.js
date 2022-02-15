import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {HEADINGCOLOR, SHADOWCOLOR} from '../../constants/colors';
import {useNavigation} from '@react-navigation/core';
const IconCard = ({icon, title, goToScreen}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.7}
      onPress={() => navigation.navigate(goToScreen)}>
      <View style={styles.main}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconCard;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    padding: scale(14.5),
    backgroundColor: '#FFFFFF',
    shadowColor: '#0000001F',
    maxWidth: scale(168),
    borderRadius: 10,
    elevation: 5,
    shadowColor: Platform.OS === 'ios' ? SHADOWCOLOR : null,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.7,
    margin: 5,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(11),
    color: HEADINGCOLOR,
    marginLeft: 5,
  },
});
