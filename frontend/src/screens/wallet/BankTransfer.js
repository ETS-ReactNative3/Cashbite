import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/cards/Card';
import Header from '../../components/headers/Header';
import Headings from '../../components/headings/Headings';
import Divider from '../../components/divider/Divider';
import {
  BLACK,
  GREEN,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
} from '../../constants/colors';
import {iconSize} from '../../constants/iconSize';
import {windowWidth} from '../../utils/dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import {BAL, TERMS} from '../../tempData/tempText';
import LinearGradient from 'react-native-linear-gradient';
import ButtonMain from '../../components/buttons/ButtonMain';
import SearchPlate from '../../components/searchBarPlate/SearchPlate';

const BankTransfer = ({route}) => {
  const [value, setValue] = useState('HDFC');
  return (
    <View style={styles.screen}>
      <Header title={route.name} back rightComponent={false} />
      <ScrollView
        style={{
          width: windowWidth,
          marginBottom: scale(70),
          flex: 1,
        }}
        contentContainerStyle={{
          paddingHorizontal: scale(15),
          alignItems: 'center',
          paddingBottom: scale(30),
        }}>
        <Headings title="Select an Account To Redeem" />
        <RadioButton.Group
          value={value}
          onValueChange={newValue => setValue(newValue)}>
          <View style={styles.radioButtonView}>
            <RadioButton.Android value="HDFC" color={PRIMARY} />
            <TouchableOpacity
              onPress={() => setValue('HDFC')}
              style={{width: '100%', alignItems: 'center'}}
              activeOpacity={0.9}>
              <Card>
                <View style={styles.row}>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <FontAwesome name="bank" color={BLACK} size={iconSize} />
                    <Text style={styles.heading}>Bank: HDFC</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <FontAwesome
                      name="trash-o"
                      color={PLACEHOLDERTEXT}
                      size={iconSize}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={[
                    styles.heading,
                    {
                      fontSize: scale(10),
                      color: PLACEHOLDERTEXT,
                      textAlignVertical: 'center',
                      paddingHorizontal: scale(26),
                      width: '100%',
                      marginVertical: scale(2),
                    },
                  ]}>
                  xxxxxxxxx001
                </Text>
                {value === 'HDFC' && (
                  <View style={{width: '100%', alignItems: 'center'}}>
                    <Divider />
                    <View style={styles.row}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          fontSize: scale(12),
                          color: BLACK,
                        }}>
                        Available Balance
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          fontSize: scale(12),
                          color: BLACK,
                        }}>
                        Rs. {BAL.map(item => item.available)}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          fontSize: scale(12),
                          color: BLACK,
                        }}>
                        Redeemable Balance
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          fontSize: scale(12),
                          color: GREEN,
                        }}>
                        Rs. {BAL.map(item => item.redeemableAmount)}
                      </Text>
                    </View>
                    <Divider />
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: scale(11),
                        color: BLACK,
                        width: '100%',
                        textAlign: 'left',
                        textAlignVertical: 'center',
                        marginBottom: scale(5),
                      }}>
                      Enter Amount To Redeem
                    </Text>
                    <SearchPlate style={{height: windowWidth * 0.13}}>
                      <TextInput
                        placeholder="Enter Amount"
                        placeholderTextColor={PLACEHOLDERTEXT}
                        keyboardType="number-pad"
                        style={{
                          height: '100%',
                          flex: 1,
                          width: '100%',
                          color: BLACK,
                          fontFamily: 'Poppins-Regular',
                          fontSize: scale(11),
                          textAlign: 'left',
                        }}
                      />
                    </SearchPlate>
                  </View>
                )}
              </Card>
            </TouchableOpacity>
          </View>
          <View style={styles.radioButtonView}>
            <RadioButton.Android value="ICICI" color={PRIMARY} />
            <TouchableOpacity
              onPress={() => setValue('ICICI')}
              style={{width: '100%', alignItems: 'center'}}
              activeOpacity={0.9}>
              <Card>
                <View style={styles.row}>
                  <View style={{alignItems: 'center', flexDirection: 'row'}}>
                    <FontAwesome name="bank" color={BLACK} size={iconSize} />
                    <Text style={styles.heading}>Bank: ICICI</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <FontAwesome
                      name="trash-o"
                      color={PLACEHOLDERTEXT}
                      size={iconSize}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={[
                    styles.heading,
                    {
                      fontSize: scale(10),
                      color: PLACEHOLDERTEXT,
                      textAlignVertical: 'center',
                      paddingHorizontal: scale(26),
                      width: '100%',
                      marginVertical: scale(2),
                    },
                  ]}>
                  xxxxxxxxx001
                </Text>
                {value === 'ICICI' && (
                  <View style={{width: '100%', alignItems: 'center'}}>
                    <Divider />
                    <View style={styles.row}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          fontSize: scale(12),
                          color: BLACK,
                        }}>
                        Available Balance
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          fontSize: scale(12),
                          color: BLACK,
                        }}>
                        Rs. {BAL.map(item => item.available)}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          fontSize: scale(12),
                          color: BLACK,
                        }}>
                        Redeemable Balance
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          fontSize: scale(12),
                          color: GREEN,
                        }}>
                        Rs. {BAL.map(item => item.redeemableAmount)}
                      </Text>
                    </View>
                    <Divider />
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: scale(11),
                        color: BLACK,
                        width: '100%',
                        textAlign: 'left',
                        textAlignVertical: 'center',
                        marginBottom: scale(5),
                      }}>
                      Enter Amount To Redeem
                    </Text>
                    <SearchPlate style={{height: windowWidth * 0.13}}>
                      <TextInput
                        placeholder="Enter Amount"
                        placeholderTextColor={PLACEHOLDERTEXT}
                        keyboardType="number-pad"
                        style={{
                          height: '100%',
                          flex: 1,
                          width: '100%',
                          color: BLACK,
                          fontFamily: 'Poppins-Regular',
                          fontSize: scale(11),
                          textAlign: 'left',
                        }}
                      />
                    </SearchPlate>
                  </View>
                )}
              </Card>
            </TouchableOpacity>
          </View>
        </RadioButton.Group>
        <Headings title="Terms & Conditions" />
        <Card>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Entypo name="dot-single" size={iconSize} color={PLACEHOLDERTEXT} />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: scale(11),
                color: PLACEHOLDERTEXT,
                textAlign: 'left',
                textAlignVertical: 'center',
              }}>
              {TERMS}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginVertical: 10,
            }}>
            <Entypo name="dot-single" size={iconSize} color={PLACEHOLDERTEXT} />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: scale(11),
                color: PLACEHOLDERTEXT,
                textAlign: 'left',
                textAlignVertical: 'center',
              }}>
              {TERMS}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Entypo name="dot-single" size={iconSize} color={PLACEHOLDERTEXT} />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: scale(11),
                color: PLACEHOLDERTEXT,
                textAlign: 'left',
                textAlignVertical: 'center',
              }}>
              {TERMS}
            </Text>
          </View>
        </Card>
      </ScrollView>
      <View style={styles.loginButtonContainer}>
        <ButtonMain style={styles.button}>
          <LinearGradient
            colors={LINEARGRADIENT}
            style={styles.buttontextContainer}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <Text style={styles.buttonText}>Proceed</Text>
          </LinearGradient>
        </ButtonMain>
      </View>
    </View>
  );
};

export default BankTransfer;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(11),
    color: BLACK,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  buttonText: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'center',
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: scale(18.2),
    width: windowWidth * 0.8,
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
  button: {
    width: windowWidth * 0.8,
  },
  radioButtonView: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    marginBottom: scale(15),
  },
  row: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  heading: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(11),
    color: BLACK,
    textAlign: 'left',
    textAlignVertical: 'center',
    marginLeft: scale(10),
  },
});
