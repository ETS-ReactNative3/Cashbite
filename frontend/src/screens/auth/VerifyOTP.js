import React, {useState, useRef} from 'react';
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
} from '../../constants/colors';
import {scale} from 'react-native-size-matters';
import {iconSize} from '../../constants/iconSize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CREATEACC} from '../../constants/images';
import {TextInput} from 'react-native';
import DropdownComponent from '../../components/dropdown/DropdownComponent';
import {codes} from '../../components/dropdown/code';
import {LOGIN, ONE_STEP_TO_GO} from '../../constants/routeNames';
const VerifyOTP = ({navigation, route}) => {
  const {number} = route.params;
  const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const fifthTextInputRef = useRef(null);
  const sixthTextInputRef = useRef(null);
  const refCallback = textInputRef => node => {
    textInputRef.current = node;
  };

  const onOtpChange = index => {
    return value => {
      if (isNaN(Number(value))) {
        // do nothing when a non digit is pressed
        return;
      }
      const otpArrayCopy = otpArray.concat();
      otpArrayCopy[index] = value;
      setOtpArray(otpArrayCopy);

      // auto focus to next InputText if value is not blank
      if (value !== '') {
        if (index === 0) {
          secondTextInputRef.current.focus();
        } else if (index === 1) {
          thirdTextInputRef.current.focus();
        } else if (index === 2) {
          fourthTextInputRef.current.focus();
        } else if (index === 3) {
          fifthTextInputRef.current.focus();
        } else if (index === 4) {
          sixthTextInputRef.current.focus();
        }
      }
    };
  };

  const onOtpKeyPress = index => {
    return ({nativeEvent: {key: value}}) => {
      // auto focus to previous InputText if value is blank and existing value is also blank
      if (value === 'Backspace' && otpArray[index] === '') {
        if (index === 1) {
          firstTextInputRef.current.focus();
        } else if (index === 2) {
          secondTextInputRef.current.focus();
        } else if (index === 3) {
          thirdTextInputRef.current.focus();
        } else if (index === 4) {
          fourthTextInputRef.current.focus();
        } else if (index === 5) {
          fifthTextInputRef.current.focus();
        }

        /**
         * clear the focused text box as well only on Android because on mweb onOtpChange will be also called
         * doing this thing for us
         * todo check this behaviour on ios
         */
        if (Platform.OS === 'android' && index > 0) {
          const otpArrayCopy = otpArray.concat();
          otpArrayCopy[index - 1] = ''; // clear the previous box which will be in focus
          setOtpArray(otpArrayCopy);
        }
      }
    };
  };

  const onResendOtpButtonPress = () => {
    // clear last OTP
    if (firstTextInputRef) {
      setOtpArray(['', '', '', '', '', '']);
      firstTextInputRef.current.focus();
    }

    // setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    // startResendOtpTimer();
  };
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
            source={CREATEACC}
            style={{height: '100%', width: '100%'}}
            resizeMode="contain"
          />
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Verify with OTP</Text>
          <Text style={styles.textSub}>Sent via SMS to {number}</Text>
        </View>
        <View style={styles.fields}>
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.blank}
            onChangeText={onOtpChange(0)}
            onKeyPress={onOtpKeyPress(0)}
            value={otpArray[0]}
            // Uncomment this in case you need to apply auto focus
            // autoFocus={true}
            ref={refCallback(firstTextInputRef)}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.blank}
            onChangeText={onOtpChange(1)}
            onKeyPress={onOtpKeyPress(1)}
            value={otpArray[1]}
            ref={refCallback(secondTextInputRef)}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.blank}
            onChangeText={onOtpChange(2)}
            onKeyPress={onOtpKeyPress(2)}
            value={otpArray[2]}
            ref={refCallback(thirdTextInputRef)}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.blank}
            onChangeText={onOtpChange(3)}
            onKeyPress={onOtpKeyPress(3)}
            value={otpArray[3]}
            ref={refCallback(fourthTextInputRef)}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.blank}
            onChangeText={onOtpChange(4)}
            onKeyPress={onOtpKeyPress(4)}
            value={otpArray[4]}
            ref={refCallback(fifthTextInputRef)}
          />
          <TextInput
            maxLength={1}
            keyboardType="number-pad"
            style={styles.blank}
            onChangeText={onOtpChange(5)}
            onKeyPress={onOtpKeyPress(5)}
            value={otpArray[5]}
            ref={refCallback(sixthTextInputRef)}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.textSub, marginTop: 0}}>
            Trying to auto-fill in{' '}
          </Text>
        </View>
        <View style={styles.ButtonContainer}>
          <ButtonMain onPress={() => navigation.navigate(ONE_STEP_TO_GO)}>
            <LinearGradient
              colors={LINEARGRADIENT}
              style={styles.buttontextContainer}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}>
              <Text style={styles.buttonText}>Verify</Text>
            </LinearGradient>
          </ButtonMain>
        </View>
      </Animatable.View>
    </LinearGradient>
  );
};

export default VerifyOTP;

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
    width: windowWidth * 0.82,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: scale(20),
  },
  blank: {
    width: windowWidth * 0.12,
    height: windowWidth * 0.14,
    backgroundColor: '#F8F8FB',
    borderRadius: scale(7),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: scale(17),
    borderWidth: 0.8,
    borderColor: BLACK,
    textAlign: 'center',
    color: BLACK,
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
    color: PLACEHOLDERTEXT,
    marginTop: scale(5),
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
    marginTop: scale(25),
    // position: 'absolute',
    // bottom: windowWidth * 0.2,
  },
});
