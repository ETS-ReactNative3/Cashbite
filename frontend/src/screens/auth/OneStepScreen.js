import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {windowWidth} from '../../utils/dimensions';
import InputField from '../../components/searchBarPlate/InputField';
import ButtonMain from '../../components/buttons/ButtonMain';
import {
  ICONCOLOR,
  LINEARGRADIENT,
  SCREEN,
  BLACK,
  PLACEHOLDERTEXT,
  PRIMARY,
  SHADOWCOLOR,
  SECONDARY,
} from '../../constants/colors';
import {scale} from 'react-native-size-matters';

import {iconSize} from '../../constants/iconSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ONESTEP} from '../../constants/images';
import {TextInput} from 'react-native';
import {MAINSTACK} from '../../constants/routeNames';
const OneStepScreen = ({navigation}) => {
  return (
    <LinearGradient colors={LINEARGRADIENT} style={styles.contianer}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{width: '100%', marginTop: scale(15)}}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={iconSize + scale(5)}
            color={ICONCOLOR}
          />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Image
            source={ONESTEP}
            style={{height: '100%', width: '100%'}}
            resizeMode="contain"
          />
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>One Step To Ahead</Text>
        </View>
        <View style={styles.fields}>
          <InputField title="Full Name" regular>
            <TextInput
              style={styles.text_input}
              placeholder="Enter full name"
              placeholderTextColor={PLACEHOLDERTEXT}
            />
          </InputField>
          <InputField title="Email" regular>
            <TextInput
              style={styles.text_input}
              autoCapitalize="none"
              placeholder="Enter email"
              placeholderTextColor={PLACEHOLDERTEXT}
            />
          </InputField>
          <InputField title="Password" regular>
            <TextInput
              style={styles.text_input}
              placeholder="Enter password"
              secureTextEntry
              placeholderTextColor={PLACEHOLDERTEXT}
            />
          </InputField>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <ButtonMain
              style={styles.cardButton}
              onPress={() => navigation.navigate(MAINSTACK)}>
              <Text style={{...styles.buttonText, color: SECONDARY}}>Skip</Text>
            </ButtonMain>
          </View>
          <View style={styles.button}>
            <ButtonMain onPress={() => navigation.navigate(MAINSTACK)}>
              <LinearGradient
                colors={LINEARGRADIENT}
                style={styles.buttontextContainer}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}>
                <Text style={styles.buttonText}>Continue</Text>
              </LinearGradient>
            </ButtonMain>
          </View>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default OneStepScreen;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowWidth * 0.5,
    overflow: 'hidden',
  },
  footer: {
    flex: 2.2,
    backgroundColor: SCREEN,
    borderTopLeftRadius: scale(35),
    borderTopRightRadius: scale(35),
    paddingHorizontal: scale(30),
    paddingVertical: scale(20),
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    textAlign: 'left',
    paddingHorizontal: scale(5),
  },
  text: {
    fontFamily: 'Poppins-Semibold',
    fontSize: scale(20),
    color: BLACK,
  },
  fields: {
    width: '100%',
    alignItems: 'center',
    width: windowWidth * 0.9,
  },
  dropdownContainer: {
    width: scale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: PLACEHOLDERTEXT,
    paddingRight: scale(5),
  },
  text_input: {
    flex: 1,
    color: BLACK,

    fontFamily: 'Poppins-Regular',
    fontSize: scale(14),
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: windowWidth * 0.08,
    position: 'absolute',
  },
  cardButton: {
    borderColor: SECONDARY,
    borderWidth: 1,
  },
  button: {
    flex: 0.48,
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
    textAlign: 'left',
  },
});
