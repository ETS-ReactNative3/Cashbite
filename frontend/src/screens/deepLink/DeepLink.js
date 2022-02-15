import React from 'react';
import {StyleSheet, Text, View, TextInput, Platform} from 'react-native';
import Header from '../../components/headers/Header';
import {scale} from 'react-native-size-matters';
import Card from '../../components/cards/Card';
import {DEEPLINKTEXT, NOTIFI} from '../../tempData/tempText';
import SearchPlate from '../../components/searchBarPlate/SearchPlate';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ButtonMain from '../../components/buttons/ButtonMain';
import {
  HEADINGCOLOR,
  INPUTTEXT,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  SEARCHBAR,
  SHADOWCOLOR,
} from '../../constants/colors';
import {MAKEPROFIT} from '../../constants/routeNames';
import {iconSize} from '../../constants/iconSize';
import {windowWidth} from '../../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
const DeepLink = ({route}) => {
  return (
    <View style={styles.screen}>
      <Header
        rightComponent={false}
        title={route.name}
        menu
        style={{marginBottom: scale(20)}}
      />
      <Card>
        <View style={styles.cardItemConatiner}>
          <Text style={styles.cardText}>{DEEPLINKTEXT}</Text>
        </View>
        <SearchPlate style={{marginVertical: scale(18)}}>
          <View style={styles.searchPlateTextInputContainer}>
            <TextInput
              placeholder="Paste Link"
              placeholderTextColor={PLACEHOLDERTEXT}
              numberOfLines={1}
              style={styles.input}
            />
          </View>
          <View style={styles.searchPlateIconContainer}>
            <FontAwesome5 name="link" color={PRIMARY} size={iconSize} />
          </View>
        </SearchPlate>
      </Card>
      <View style={styles.loginButtonContainer}>
        <ButtonMain style={styles.button}>
          <LinearGradient
            colors={LINEARGRADIENT}
            style={styles.buttontextContainer}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <Text style={styles.buttonText}>Save</Text>
          </LinearGradient>
        </ButtonMain>
      </View>
    </View>
  );
};

export default DeepLink;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
    paddingHorizontal: scale(16),
    paddingBottom: scale(30),
  },
  cardItemConatiner: {
    width: '100%',
    padding: scale(2),
    justifyContent: 'center',
  },
  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    color: HEADINGCOLOR,
  },
  searchPlateTextInputContainer: {
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  input: {
    height: '100%',
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    color: INPUTTEXT,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  cardButton: {
    borderColor: PRIMARY,
    borderWidth: 1,
  },
  searchPlateIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
    height: '100%',
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: windowWidth * 0.08,
    width: windowWidth * 0.85,
    elevation: 5,
    shadowColor: Platform.OS === 'ios' ? PLACEHOLDERTEXT : null,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontextContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'center',
  },
});
