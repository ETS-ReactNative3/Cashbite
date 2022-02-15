import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {HEADINGCOLOR, PRIMARY} from '../../constants/colors';
import {useNavigation} from '@react-navigation/core';
import {ALLSTORE} from '../../constants/routeNames';
const Headings = ({title, seeAll, style, styleC}) => {
  const navigation = useNavigation();
  return (
    <View style={{...styles.titleContainer, ...styleC}}>
      <Text style={{...styles.title, ...style}}>{title}</Text>
      <Text
        style={styles.seeAll}
        onPress={() => navigation.navigate(ALLSTORE)}
        suppressHighlighting>
        {seeAll}
      </Text>
    </View>
  );
};

export default Headings;

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(2),
    marginVertical: scale(10),
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: scale(17),
    color: HEADINGCOLOR,
    textAlign: 'left',
  },
  seeAll: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: scale(12),
    color: PRIMARY,
    textAlign: 'left',
  },
});
