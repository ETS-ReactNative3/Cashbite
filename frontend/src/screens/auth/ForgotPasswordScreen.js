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
  SHADOWCOLOR,
} from '../../constants/colors';
import {scale} from 'react-native-size-matters';
import {iconSize} from '../../constants/iconSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {FORGOT} from '../../constants/images';
import {TextInput} from 'react-native';
import {LOGIN} from '../../constants/routeNames';
const ForgotPasswordScreen = ({navigation}) => {
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
            source={FORGOT}
            style={{height: '100%', width: '100%'}}
            resizeMode="contain"
          />
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Forgot Password</Text>
        </View>
        <View style={styles.fields}>
          <View
            style={{
              justifyContent: 'center',
              width: '100%',
              paddingHorizontal: scale(16),
              alignItems: 'center',
              marginVertical: scale(40),
            }}>
            <Text>
              We, just need your registered mobile number for set a new password
              link.
            </Text>
          </View>
          <InputField title="OTP" regular style={{marginTop: 0}}>
            <TextInput
              style={styles.text_input}
              placeholder="Enter OTP"
              secureTextEntry
            />
          </InputField>
        </View>
        <View style={styles.ButtonContainer}>
          <ButtonMain onPress={() => navigation.navigate(LOGIN)}>
            <LinearGradient
              colors={LINEARGRADIENT}
              style={styles.buttontextContainer}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}>
              <Text style={styles.buttonText}>Send</Text>
            </LinearGradient>
          </ButtonMain>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default ForgotPasswordScreen;

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
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    height: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: scale(14),
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
  bottomTextContainer: {
    backgroundColor: SCREEN,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: windowWidth * 0.1,
    marginTop: scale(10),
  },
  textSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    textAlign: 'center',
    color: PLACEHOLDERTEXT,
  },
  ButtonContainer: {
    width: '100%',
    elevation: 5,
    shadowColor: SHADOWCOLOR,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    borderRadius: scale(50),
    marginTop: scale(20),
    position: 'absolute',
    bottom: windowWidth * 0.15,
  },
});
