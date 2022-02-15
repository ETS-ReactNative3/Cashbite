import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/headers/Header';
import {
  BLACK,
  GREEN,
  HEADINGCOLOR,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  SHADOWCOLOR,
  TEXTBLACK,
} from '../../constants/colors';
import {scale} from 'react-native-size-matters';
import {BAL} from '../../tempData/tempText';
import {windowWidth} from '../../utils/dimensions';
import Card from '../../components/cards/Card';
import Divider from '../../components/divider/Divider';
import ButtonMain from '../../components/buttons/ButtonMain';
import LinearGradient from 'react-native-linear-gradient';
import {REDEEMBALANCE} from '../../constants/routeNames';

const Wallet = ({navigation, route}) => {
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} title={route.name} menu />
      <ScrollView
        style={{width: windowWidth, marginBottom: scale(65)}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: scale(15),
          paddingBottom: scale(30),
          paddingTop: scale(10),
        }}>
        <Text style={styles.heading}>Your Available Balance</Text>
        <View style={styles.view}>
          <Text style={styles.balance}>Rs. </Text>
          <Text style={styles.balance}>{BAL.map(item => item.available)}</Text>
        </View>
        <View
          style={[
            styles.view,
            {
              backgroundColor: '#e7f9e5',
              paddingHorizontal: scale(10),
              paddingVertical: scale(15),
              borderRadius: 8,
              flexDirection: 'column',
              marginTop: scale(12),
              marginBottom: scale(15),
            },
          ]}>
          <View style={styles.spaceView}>
            <Text style={styles.redeem}>Redeemable Amount:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.redeem}>
                Rs. {BAL.map(item => item.redeemableAmount)}
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.heading,
              {
                color: PLACEHOLDERTEXT,
                alignSelf: 'flex-end',
                textAlign: 'right',
                fontSize: scale(10),
              },
            ]}>
            (Minimum redeemable amount is Rs. 1000)
          </Text>
        </View>
        <Card>
          <Text style={styles.cardHeading}>Total</Text>
          <Divider style={{width: '100%', marginTop: scale(5)}} />
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.spaceView}>
              <Text style={styles.cardSubHeading}>Total Paid:</Text>
              <Text style={[styles.cardSubHeading, {color: PRIMARY}]}>
                Rs. {BAL.map(item => item.total.totalPaid)}
              </Text>
            </View>
            <View style={styles.spaceView}>
              <Text style={styles.cardSubHeading}>Total Earned:</Text>
              <Text style={[styles.cardSubHeading, {color: GREEN}]}>
                Rs. {BAL.map(item => item.total.totalEarned)}
              </Text>
            </View>
          </View>
        </Card>
        <Card style={{marginTop: scale(20)}}>
          <Text style={styles.cardHeading}>Cashback Earnings</Text>
          <Divider style={{width: '100%', marginTop: scale(5)}} />
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.spaceView}>
              <Text style={styles.cardSubHeading}>Pending:</Text>
              <Text style={[styles.cardSubHeading, {color: PRIMARY}]}>
                Rs. {BAL.map(item => item.cashback.pending)}
              </Text>
            </View>
            <View style={styles.spaceView}>
              <Text style={styles.cardSubHeading}>Approved:</Text>
              <Text style={[styles.cardSubHeading, {color: GREEN}]}>
                Rs. {BAL.map(item => item.cashback.approved)}
              </Text>
            </View>
          </View>
        </Card>
        <Card style={{marginTop: scale(20)}}>
          <Text style={styles.cardHeading}>Referral Earnings</Text>
          <Divider style={{width: '100%', marginTop: scale(5)}} />
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={styles.spaceView}>
              <Text style={styles.cardSubHeading}>Pending:</Text>
              <Text style={[styles.cardSubHeading, {color: PRIMARY}]}>
                Rs. {BAL.map(item => item.referral.pending)}
              </Text>
            </View>
            <View style={styles.spaceView}>
              <Text style={styles.cardSubHeading}>Total Earned:</Text>
              <Text style={[styles.cardSubHeading, {color: GREEN}]}>
                {BAL.map(item => item.total.totalEarned)}
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>
      <View style={styles.loginButtonContainer}>
        <ButtonMain
          style={styles.button}
          onPress={() => navigation.navigate(REDEEMBALANCE)}>
          <LinearGradient
            colors={LINEARGRADIENT}
            style={styles.buttontextContainer}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <Text style={styles.buttonText}>Redeem Now</Text>
          </LinearGradient>
        </ButtonMain>
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
    paddingHorizontal: scale(15),
  },
  heading: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    color: HEADINGCOLOR,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  balance: {
    color: PRIMARY,
    fontSize: scale(20),
    fontFamily: 'Poppins-Bold',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeem: {
    fontFamily: 'Poppins-Bold',
    fontSize: scale(14),
    color: GREEN,
    textAlign: 'left',
    // textAlignVertical: 'center',
  },
  balanceContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(2),
  },
  heading: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    color: TEXTBLACK,
  },
  spaceView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(5),
  },
  cardHeading: {
    fontSize: scale(14),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'left',
    textAlignVertical: 'center',
    width: '100%',
    color: BLACK,
  },
  cardSubHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    color: BLACK,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? scale(18.2) : scale(17.5),
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
  buttonText: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'center',
  },
});
