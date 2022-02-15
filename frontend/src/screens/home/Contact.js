import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Header from '../../components/headers/Header';
import {scale, verticalScale} from 'react-native-size-matters';
import {
  HEADINGCOLOR,
  PLACEHOLDERTEXT,
  SCREEN,
  INPUTTEXT,
  LINEARGRADIENT,
  BLACK,
} from '../../constants/colors';
import SearchPlate from '../../components/searchBarPlate/SearchPlate';
import ButtonMain from '../../components/buttons/ButtonMain';
import LinearGradient from 'react-native-linear-gradient';
import InputField from '../../components/searchBarPlate/InputField';
import {windowWidth} from '../../utils/dimensions';
const Contact = ({route}) => {
  return (
    <View style={styles.container}>
      <Header rightComponent={false} menu title={route.name} />
      <ScrollView
        style={{width: windowWidth, paddingHorizontal: scale(15), flex: 1}}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: scale(70),
        }}>
        <Text style={styles.heading}>Contact Our Support Team</Text>
        <InputField regular title="Email">
          <TextInput
            placeholder="Enter email id"
            placeholderTextColor={PLACEHOLDERTEXT}
            style={styles.input}
          />
        </InputField>
        <InputField title="Phone Number" regular>
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
          <TextInput
            placeholder="Enter email id"
            placeholderTextColor={PLACEHOLDERTEXT}
            style={styles.input}
          />
        </InputField>
        <View style={styles.box}>
          <Text style={styles.subHeading}>Your Message</Text>
          <SearchPlate style={styles.textAreaInput}>
            <TextInput
              placeholder="Write your message here..."
              placeholderTextColor={PLACEHOLDERTEXT}
              style={[
                styles.input,
                {textAlignVertical: 'top', flex: 1, flexWrap: 'wrap'},
              ]}
            />
          </SearchPlate>
        </View>
      </ScrollView>
      <ButtonMain style={{marginVertical: verticalScale(50)}}>
        <LinearGradient
          colors={LINEARGRADIENT}
          style={styles.buttontextContainer}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 0}}>
          <Text style={styles.buttonText}>Submit</Text>
        </LinearGradient>
      </ButtonMain>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
    paddingHorizontal: scale(32),
  },
  heading: {
    marginVertical: verticalScale(25),
    fontFamily: 'Poppins-Medium',
    fontSize: scale(15),
    lineHeight: scale(23),
    width: '100%',
    textAlign: 'center',
    color: BLACK,
  },
  box: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: HEADINGCOLOR,
    marginBottom: verticalScale(8),
    alignSelf: 'flex-start',
    marginLeft: scale(15),
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
  dropdownContainer: {
    width: scale(45),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: PLACEHOLDERTEXT,
    paddingRight: scale(5),
  },
  textAreaInput: {
    height: scale(100),
    borderRadius: scale(10),
    flexWrap: 'wrap',
    flexDirection: 'column',
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
  codeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: PLACEHOLDERTEXT,
    borderRightWidth: 1,
    height: '60%',
    marginRight: 10,
  },
});
