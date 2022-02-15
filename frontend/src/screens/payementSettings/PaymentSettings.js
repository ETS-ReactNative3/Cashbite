import React, {useState} from 'react';
import {
  FlatList,
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
import Card from '../../components/cards/Card';
import Divider from '../../components/divider/Divider';
import HeaderNav from '../../components/headers/HeaderNav';
import Headings from '../../components/headings/Headings';
import {
  BLACK,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  TEXTBLACK,
  TEXTWHITE,
} from '../../constants/colors';
import {windowWidth} from '../../utils/dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {iconSize} from '../../constants/iconSize';
import {SAVEDACC} from '../../tempData/tempText';
import InputField from '../../components/searchBarPlate/InputField';
import ButtonMain from '../../components/buttons/ButtonMain';
import LinearGradient from 'react-native-linear-gradient';

const PaymentSettings = ({route}) => {
  const [value, setValue] = useState('HDFC');
  const [wallet, setWallet] = useState('Paytm');
  const [UPI, setUPI] = useState('UPI');
  const [tab, setTab] = useState(1);
  return (
    <View style={styles.screen}>
      <HeaderNav menu title={route.name}>
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
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: scale(15),
              color: TEXTWHITE,
              textAlignVertical: 'center',
              textAlign: 'center',
            }}>
            Bank
          </Text>
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
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: scale(15),
              color: TEXTWHITE,
              textAlignVertical: 'center',
              textAlign: 'center',
            }}>
            Mobile Wallets
          </Text>
        </TouchableOpacity>
      </HeaderNav>
      {tab === 1 && (
        <View style={{alignItems: 'center', flex: 1}}>
          <ScrollView
            style={{width: windowWidth, marginBottom: scale(69)}}
            contentContainerStyle={{
              width: windowWidth,
              alignItems: 'center',
              paddingHorizontal: scale(15),
              paddingBottom: scale(30),
            }}>
            <Headings
              title="Saved Accounts"
              styleC={{marginBottom: 0, marginTop: 20}}
            />
            <Divider style={{marginBottom: scale(20)}} />
            <RadioButton.Group
              value={value}
              onValueChange={newValue => setValue(newValue)}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                  paddingHorizontal: scale(10),
                  marginBottom: scale(15),
                }}>
                <RadioButton.Android value="ICICI" color={PRIMARY} />
                <TouchableOpacity
                  onPress={() => setValue('ICICI')}
                  style={{width: '100%', alignItems: 'center'}}
                  activeOpacity={0.9}>
                  <Card>
                    <View style={styles.cardContainerInternal}>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <FontAwesome
                          name="bank"
                          color={BLACK}
                          size={iconSize}
                        />
                        <Text style={styles.bank}>Bank: ICICI</Text>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <FontAwesome
                          name="trash-o"
                          color={PLACEHOLDERTEXT}
                          size={iconSize}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={[
                        styles.bank,
                        {
                          fontSize: scale(10),
                          color: PLACEHOLDERTEXT,
                          marginTop: scale(10),
                          width: '100%',
                          paddingHorizontal: scale(25),
                        },
                      ]}>
                      xxxxxxxxxx100
                    </Text>
                  </Card>
                </TouchableOpacity>
              </View>
              <View style={styles.cardsContainer}>
                <RadioButton.Android value="HDFC" color={PRIMARY} />
                <TouchableOpacity
                  onPress={() => setValue('HDFC')}
                  style={{width: '100%', alignItems: 'center'}}
                  activeOpacity={0.9}>
                  <Card>
                    <View style={styles.cardContainerInternal}>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <FontAwesome
                          name="bank"
                          color={BLACK}
                          size={iconSize}
                        />
                        <Text style={[styles.bank]}>Bank: HDFC</Text>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <FontAwesome
                          name="trash-o"
                          color={PLACEHOLDERTEXT}
                          size={iconSize}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={[
                        styles.bank,
                        {
                          fontSize: scale(10),
                          color: PLACEHOLDERTEXT,
                          marginTop: scale(10),
                          width: '100%',
                          paddingHorizontal: scale(25),
                        },
                      ]}>
                      xxxxxxxxxx100
                    </Text>
                  </Card>
                </TouchableOpacity>
              </View>
            </RadioButton.Group>
            <Divider style={{marginTop: scale(20)}} />
            <Headings
              title="Add New Account"
              styleC={{marginTop: 0, marginBottom: scale(10)}}
            />
            <Card style={{alignItems: 'flex-start'}}>
              <RadioButton.Group
                value={UPI}
                onValueChange={newValue => setUPI(newValue)}>
                <View style={styles.rowView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRight: scale(15),
                    }}>
                    <Text
                      onPress={() => setUPI('IFSC')}
                      suppressHighlighting={true}
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: scale(12),
                        textAlign: 'left',
                        color: BLACK,
                      }}>
                      IFSC
                    </Text>
                    <RadioButton.Android value="IFSC" color={PRIMARY} />
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      onPress={() => setUPI('UPI')}
                      suppressHighlighting={true}
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: scale(12),
                        textAlign: 'left',
                        color: BLACK,
                      }}>
                      UPI
                    </Text>
                    <RadioButton.Android value="UPI" color={PRIMARY} />
                  </View>
                </View>
              </RadioButton.Group>
            </Card>
            {UPI === 'UPI' && (
              <InputField regular title="UPI id:">
                <TextInput
                  placeholder="Enter a valid UPI ID"
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
            )}
            {UPI === 'IFSC' && (
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  paddingBottom: scale(125),
                }}>
                <InputField regular title="Bank Name:">
                  <TextInput
                    placeholder="Enter your Bank Name"
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
                <InputField regular title="Branch Name:">
                  <TextInput
                    placeholder="Enter the Branch Name"
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
                <InputField regular title="Account Number:">
                  <TextInput
                    placeholder="Enter your Account Number"
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
                <InputField regular title="Account Holder Name:">
                  <TextInput
                    placeholder="Enter the Holders Name"
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
                <InputField regular title="Bank IFSC Code:">
                  <TextInput
                    placeholder="Enter the IFSC code"
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
              </View>
            )}
          </ScrollView>
        </View>
      )}
      {tab === 2 && (
        <View style={{alignItems: 'center'}}>
          <ScrollView
            style={{width: windowWidth, flex: 1}}
            contentContainerStyle={{
              width: windowWidth,
              alignItems: 'center',
              paddingHorizontal: scale(15),
              paddingBottom: scale(50),
            }}>
            <Headings
              title="Saved Wallets"
              styleC={{marginBottom: 0, marginTop: 20}}
            />
            <Divider style={{marginBottom: scale(20)}} />
            <RadioButton.Group
              value={wallet}
              onValueChange={newValue => setWallet(newValue)}>
              <View style={styles.cardsContainer}>
                <RadioButton.Android value="Paytm" color={PRIMARY} />
                <TouchableOpacity
                  onPress={() => setValue('HDFC')}
                  style={{width: '100%', alignItems: 'center'}}
                  activeOpacity={0.9}>
                  <Card>
                    <View style={styles.cardContainerInternal}>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <Image
                          source={require('../../assets/images/other/paytm.png')}
                          style={{height: scale(20), width: scale(30)}}
                        />
                        <Text style={[styles.bank]}>Paytm</Text>
                      </View>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <FontAwesome
                          name="trash-o"
                          color={PLACEHOLDERTEXT}
                          size={iconSize}
                        />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={[
                        styles.bank,
                        {
                          fontSize: scale(10),
                          color: PLACEHOLDERTEXT,
                          marginTop: scale(10),
                          width: '100%',
                          paddingHorizontal: scale(25),
                        },
                      ]}>
                      +91-1234567890
                    </Text>
                  </Card>
                </TouchableOpacity>
              </View>
            </RadioButton.Group>
            <Divider style={{marginTop: scale(20)}} />
            <InputField regular title="Wallet Type:">
              <TextInput
                placeholder="Add Wallet Type"
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
            <InputField regular title="Phone Number:">
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
                placeholder="Enter your registered mobile number"
                placeholderTextColor={PLACEHOLDERTEXT}
                style={{
                  flex: 1,
                  textAlign: 'left',
                  textAlignVertical: 'center',
                  fontFamily: 'Poppins-Regular',
                  fontSize: scale(12),
                  height: '100%',
                  color: TEXTBLACK,
                  marginLeft: scale(10),
                }}
              />
            </InputField>
          </ScrollView>
        </View>
      )}
      <View style={styles.loginButtonContainer}>
        <ButtonMain style={styles.button}>
          <LinearGradient
            colors={LINEARGRADIENT}
            style={styles.buttontextContainer}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <Text style={styles.buttonText}>
              {tab === 1 ? 'Add Account' : 'Add Wallet'}
            </Text>
          </LinearGradient>
        </ButtonMain>
      </View>
    </View>
  );
};

export default PaymentSettings;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  view: {
    width: '100%',
    alignItems: 'center',
  },
  rowView: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.12,
  },
  cardsContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(10),
    marginBottom: scale(15),
  },
  cardContainerInternal: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bank: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    textAlign: 'left',
    textAlignVertical: 'center',
    marginLeft: 10,
    color: BLACK,
  },
  codeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: PLACEHOLDERTEXT,
    borderRightWidth: 1,
    height: '60%',
  },
  buttonText: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: scale(25),
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
});
