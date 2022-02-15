import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {
  BLACK,
  PRIMARY,
  SCREEN,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  SHADOWCOLOR,
  DRAWERBACKGROUND,
} from '../../constants/colors';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {windowWidth, windowHeight} from '../../utils/dimensions';
import {LOGINIMG, GOOGLE} from '../../constants/images';
import ButtonMain from '../../components/buttons/ButtonMain';
import SearchPlate from '../../components/searchBarPlate/SearchPlate';
import {VERIFY_OTP} from '../../constants/routeNames';

const LoginScreen = ({navigation}) => {
  const [number, setNumber] = useState(null);
  return (
    <LinearGradient colors={LINEARGRADIENT} style={styles.container}>
      <StatusBar backgroundColor={DRAWERBACKGROUND} barStyle="light-content" />
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image
            source={LOGINIMG}
            resizeMode="contain"
            style={{height: '80%', width: '80%'}}
          />
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Login or Signup</Text>
        </View>
        <View style={styles.fields}>
          <SearchPlate>
            <View style={styles.codeContainer}>
              <Text
                style={{
                  ...styles.buttonText,
                  color: BLACK,
                  fontSize: scale(12),
                  marginRight: scale(10),
                }}>
                +91
              </Text>
            </View>
            <View style={{flex: 1}}>
              <TextInput
                placeholder="Mobile Number"
                placeholderTextColor={PLACEHOLDERTEXT}
                style={styles.text_input}
                value={number}
                keyboardType="number-pad"
                onChangeText={item => setNumber(item)}
              />
            </View>
          </SearchPlate>
        </View>
        <View
          style={{
            ...styles.fields,
            flexDirection: 'row',
            marginBottom: scale(25),
            flexWrap: 'wrap',
          }}>
          <Text style={styles.textSub}>By continuing, I agree to the</Text>
          <Text style={{...styles.textSub, color: PRIMARY, marginLeft: 3}}>
            Terms of Use
          </Text>
          <Text style={{...styles.textSub, marginHorizontal: 3}}>&</Text>
          <Text style={{...styles.textSub, color: PRIMARY}}>
            Privacy Policy
          </Text>
        </View>
        <View style={styles.loginButtonContainer}>
          <ButtonMain
            style={styles.button}
            onPress={() =>
              navigation.navigate(VERIFY_OTP, {
                number: number,
              })
            }>
            <LinearGradient
              colors={LINEARGRADIENT}
              style={styles.buttontextContainer}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}>
              <Text style={styles.buttonText}>Login</Text>
            </LinearGradient>
          </ButtonMain>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
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
    flex: 1.7,
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
    marginTop: scale(10),
  },
  text: {
    fontFamily: 'Poppins-Semibold',
    fontSize: scale(18),
    color: BLACK,
  },
  fields: {
    width: '100%',
    alignItems: 'center',
    width: windowWidth * 0.9,
    marginTop: scale(25),
  },
  codeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: PLACEHOLDERTEXT,
    borderRightWidth: 1,
    height: '60%',
  },
  text_input: {
    flex: 1,
    color: BLACK,
    height: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: scale(14),
    textAlignVertical: 'center',
    textAlign: 'left',
    marginLeft: scale(10),
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
  textSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    textAlign: 'center',
    color: BLACK,
  },
  loginButtonContainer: {
    width: windowWidth * 0.9,
    elevation: 5,
    shadowColor: SHADOWCOLOR,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
    borderRadius: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
