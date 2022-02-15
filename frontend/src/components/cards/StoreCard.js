import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {HEADINGCOLOR, SCREEN, SHADOWCOLOR} from '../../constants/colors';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {useNavigation} from '@react-navigation/core';
import {STOREDETAILS} from '../../constants/routeNames';
const StoreCard = ({storeImg, storeName, discounts, style, goToScreen}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{...styles.buttonContainer, ...style}}
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate(goToScreen, {
          img: storeImg,
          store: storeName,
          dis: discounts,
        })
      }>
      <View style={styles.imageContainer}>
        <Image source={storeImg} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.storeText}>{storeName}</Text>
        <Text style={styles.discountText}>{discounts}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoreCard;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    padding: scale(15),
    backgroundColor: SCREEN,
    width: windowWidth * 0.43,
    height: windowWidth * 0.4,
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
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
    marginBottom: scale(10),
    flex: 1.5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    width: '100%',
  },
  storeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: HEADINGCOLOR,
  },
  discountText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: HEADINGCOLOR,
  },
});
