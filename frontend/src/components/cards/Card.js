import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {SCREEN, SHADOWCOLOR} from '../../constants/colors';

const Card = ({children, style}) => {
  return <View style={{...styles.cardContainer, ...style}}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: SCREEN,
    padding: scale(15),
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5,
    shadowColor: Platform.OS === 'ios' ? SHADOWCOLOR : null,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 1,
  },
});
