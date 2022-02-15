import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import ButtonMain from '../../components/buttons/ButtonMain';
import HeaderNav from '../../components/headers/HeaderNav';
import InputField from '../../components/searchBarPlate/InputField';
import {
  BLACK,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  SCREEN,
  SEARCHBAR,
  SHADOWCOLOR,
  TEXTWHITE,
} from '../../constants/colors';
import {windowWidth} from '../../utils/dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';

const cashbackClaims = ({route, navigation}) => {
  const [tab, setTab] = useState(1);
  return (
    <View style={styles.screen}>
      <HeaderNav title={route.name} menu>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab(1)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: SCREEN,
            borderBottomWidth: tab === 1 ? 2 : 0,
            flex: 1,
          }}>
          <Text style={styles.headerText}>Missing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setTab(2)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: SCREEN,
            borderBottomWidth: tab === 2 ? 2 : 0,
            flex: 1,
          }}>
          <Text style={styles.headerText}>History</Text>
        </TouchableOpacity>
      </HeaderNav>
      <View style={{width: '100%', alignItems: 'center'}}>
        {tab === 1 && (
          <View style={{width: '100%', alignItems: 'center'}}>
            <ScrollView
              style={{width: '100%'}}
              contentContainerStyle={styles.scrollContent}>
              <InputField title="Select Date" regular>
                <TextInput
                  placeholder="Enter Date"
                  placeholderTextColor={PLACEHOLDERTEXT}
                  style={{
                    flex: 1,
                    textAlign: 'left',
                    textAlignVertical: 'center',
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(12),
                    height: '100%',
                    color: BLACK,
                  }}
                />
              </InputField>
              <InputField title="Order Id" regular>
                <TextInput
                  placeholder="Enter outlet"
                  placeholderTextColor={PLACEHOLDERTEXT}
                  style={{
                    flex: 1,
                    textAlign: 'left',
                    textAlignVertical: 'center',
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(12),
                    height: '100%',
                    color: BLACK,
                  }}
                />
              </InputField>
              <InputField
                title="Description"
                regular
                searchStyle={{
                  height: windowWidth * 0.35,
                  borderRadius: 10,
                }}>
                <TextInput
                  placeholder="Enter Date"
                  placeholderTextColor={PLACEHOLDERTEXT}
                  style={{
                    flex: 1,
                    textAlign: 'left',
                    textAlignVertical: 'top',
                    fontFamily: 'Poppins-Regular',
                    fontSize: scale(12),
                    height: '100%',
                    color: BLACK,
                  }}
                />
              </InputField>
              <Text
                style={{
                  width: '100%',
                  paddingHorizontal: scale(15),
                  marginTop: scale(15),
                }}>
                Add Screenshot Of Order Details
              </Text>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{
                  width: windowWidth * 0.75,
                  height: windowWidth * 0.4,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  backgroundColor: SEARCHBAR,
                  marginTop: scale(15),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AntDesign name="picture" size={scale(50)} color="grey" />
              </TouchableOpacity>
            </ScrollView>
            <View style={styles.loginButtonContainer}>
              <ButtonMain style={styles.button}>
                <LinearGradient
                  colors={LINEARGRADIENT}
                  style={styles.buttontextContainer}
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}>
                  <Text style={styles.buttonText}>Claim</Text>
                </LinearGradient>
              </ButtonMain>
            </View>
          </View>
        )}
        {tab === 2 && (
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: windowWidth * 0.55,
            }}>
            <View>
              <Foundation
                name="ticket"
                color="#EFEDEE"
                size={windowWidth * 0.45}
              />
            </View>
            <Text
              style={[
                styles.headerText,
                {color: PLACEHOLDERTEXT, marginTop: scale(10)},
              ]}>
              You haven't raised any tickets yet
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default cashbackClaims;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: SCREEN,
    alignItems: 'center',
  },
  scrollContent: {
    width: '100%',
    paddingHorizontal: scale(15),
    paddingBottom: scale(50),
    alignItems: 'center',
  },
  loginButtonContainer: {
    position: 'absolute',
    top: windowWidth * 1.64,
    width: windowWidth * 0.9,
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
  headerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(14),
    color: TEXTWHITE,
    textAlignVertical: 'bottom',
    textAlign: 'center',
  },
});
