import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/headers/Header';
import {
  FACEBOOK,
  GREEN,
  HEADINGCOLOR,
  PLACEHOLDERTEXT,
  RED,
  SCREEN,
  TEXTBLACK,
  WHATSAPP,
  YELLOW,
} from '../../constants/colors';
import Card from '../../components/cards/Card';
import {scale, verticalScale} from 'react-native-size-matters';
import {windowWidth} from '../../utils/dimensions';
import Divider from '../../components/divider/Divider';
import {BAL, PEND, STATUS, WHO} from '../../tempData/tempBalance';
import Headings from '../../components/headings/Headings';

const Overview = ({route}) => {
  return (
    <View style={styles.container}>
      <Header rightComponent={false} menu title={route.name} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewBox}>
        <Card>
          <View style={styles.balanceContainer}>
            <Text style={styles.heading}>Available Balance</Text>
            <Text style={styles.balance}>{BAL}</Text>
          </View>
          <Divider />
          <View style={styles.balanceContainer}>
            <Text style={styles.heading}>Pending Earnings</Text>
            <Text style={{...styles.balance, color: YELLOW}}>{PEND}</Text>
          </View>
        </Card>
        <Headings title="Your Recent Activity" />
        <Text style={styles.subText}>
          A snapshot of your recent purchases made via CouponDunia
        </Text>
        {/* {first} */}
        <Card>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentSectionHeading}>Merchant:</Text>
            <Text style={styles.balance}>{STATUS.Accepted}</Text>
          </View>
          <Divider style={{marginVertical: verticalScale(10)}} />
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Claim Id:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.ClamId}
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Amount:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.Amount}
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Date:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.Date}
            </Text>
          </View>
        </Card>
        {/* {second} */}
        <Card style={{marginVertical: scale(20)}}>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentSectionHeading}>Merchant:</Text>
            <Text style={{...styles.balance, color: FACEBOOK}}>
              {STATUS.Ongoing}
            </Text>
          </View>
          <Divider style={{marginVertical: verticalScale(10)}} />
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Claim Id:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.ClamId}
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Amount:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.Amount}
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Date:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.Date}
            </Text>
          </View>
        </Card>
        {/* {third} */}
        <Card>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentSectionHeading}>Merchant:</Text>
            <Text style={{...styles.balance, color: YELLOW}}>
              {STATUS.Pending}
            </Text>
          </View>
          <Divider style={{marginVertical: verticalScale(10)}} />
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Claim Id:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.ClamId}
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Amount:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.Amount}
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Date:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.Date}
            </Text>
          </View>
        </Card>
        {/* {fourth} */}
        <Card style={{marginVertical: scale(20)}}>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentSectionHeading}>Merchant:</Text>
            <Text style={{...styles.balance, color: RED}}>
              {STATUS.Cancelled}
            </Text>
          </View>
          <Divider style={{marginVertical: verticalScale(10)}} />
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Claim Id:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.ClamId}
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Amount:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.Amount}
            </Text>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.recentActivityCardText}>Date:</Text>
            <Text
              style={{
                ...styles.recentActivityCardText,
                fontFamily: 'Poppins-Medium',
              }}>
              {WHO.Date}
            </Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Overview;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', backgroundColor: SCREEN},
  scrollView: {
    width: windowWidth,
    alignSelf: 'center',
    flex: 1,
  },
  scrollViewBox: {
    paddingHorizontal: scale(16),
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    paddingTop: verticalScale(15),
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
    lineHeight: scale(18),
    color: TEXTBLACK,
  },
  balance: {
    fontFamily: 'Poppins-Semibold',
    fontSize: scale(17),
    lineHeight: scale(26),
    color: GREEN,
  },
  subText: {
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: PLACEHOLDERTEXT,
    marginBottom: verticalScale(16),
  },
  recentSectionHeading: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Regular',
    lineHeight: scale(23),
    color: HEADINGCOLOR,
  },
  recentActivityCardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: HEADINGCOLOR,
  },
});
