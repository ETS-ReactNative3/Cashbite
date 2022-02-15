import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import Card from '../../components/cards/Card';
import Divider from '../../components/divider/Divider';
import Header from '../../components/headers/Header';
import {
  BLACK,
  ICONCOLOR,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  TEXTBLACK,
} from '../../constants/colors';
import {iconSize} from '../../constants/iconSize';
import {REED} from '../../tempData/tempText';
import {windowWidth} from '../../utils/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BANK, GIFTVOUCHER, WALLETSCREEN} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';
const RedeemBalance = ({navigation, route}) => {
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} title={route.name} menu />
      <ScrollView
        style={{width: windowWidth}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: scale(15),
          paddingBottom: scale(30),
          paddingTop: scale(15),
        }}>
        {/* first */}
        <Card>
          <View style={styles.spaceView}>
            <Text style={styles.heading}>Available Balance</Text>
            <Text style={[styles.heading, {fontSize: scale(17)}]}>
              Rs. {REED.map(item => item.available)}
            </Text>
          </View>
          <Text
            style={[
              styles.cardSubHeading,
              {
                color: PLACEHOLDERTEXT,
                alignSelf: 'flex-end',
                textAlign: 'right',
                fontSize: scale(10),
              },
            ]}>
            (Minimum redeemable amount is Rs. 1000)
          </Text>
        </Card>
        {/* second */}
        <Card style={{marginVertical: scale(18)}}>
          <View style={styles.spaceView}>
            <Text style={styles.heading}>Available Rewards</Text>
            <Text style={[styles.heading, {fontSize: scale(17)}]}>
              Rs. {REED.map(item => item.rewards)}
            </Text>
          </View>
        </Card>
        {/* third */}
        <Card>
          <View style={styles.spaceView}>
            <Text style={styles.heading}>Available Voucher</Text>
            <Text style={[styles.heading, {fontSize: scale(17)}]}>
              Rs. {REED.map(item => item.voucher)}
            </Text>
          </View>
        </Card>
        <Divider />
        <Text style={[styles.heading, {fontSize: scale(11)}]}>
          Please select a payment mode by which you want to recieve your
          cashback/reward.
        </Text>
        <View style={{width: windowWidth * 0.7, alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate(WALLETSCREEN)}
            activeOpacity={0.8}
            style={{width: '100%', alignItems: 'center'}}>
            <Card
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: scale(18),
              }}>
              <Text
                style={[
                  styles.heading,
                  {fontFamily: 'Poppins-Medium', color: PRIMARY},
                ]}>
                Wallet
              </Text>
              <View style={{width: scale(45), height: scale(45)}}>
                <LinearGradient
                  colors={LINEARGRADIENT}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                  }}>
                  <Ionicons name="wallet" color={ICONCOLOR} size={iconSize} />
                </LinearGradient>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(BANK)}
            activeOpacity={0.8}
            style={{width: '100%', alignItems: 'center'}}>
            <Card
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: scale(18),
              }}>
              <Text
                style={[
                  styles.heading,
                  {fontFamily: 'Poppins-Medium', color: PRIMARY},
                ]}>
                Bank Transfer
              </Text>
              <View style={{width: scale(45), height: scale(45)}}>
                <LinearGradient
                  colors={LINEARGRADIENT}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                  }}>
                  <FontAwesome name="bank" color={ICONCOLOR} size={iconSize} />
                </LinearGradient>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(GIFTVOUCHER)}
            activeOpacity={0.8}
            style={{width: '100%', alignItems: 'center'}}>
            <Card
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: scale(18),
              }}>
              <Text
                style={[
                  styles.heading,
                  {fontFamily: 'Poppins-Medium', color: PRIMARY},
                ]}>
                Gift Voucher
              </Text>
              <View style={{width: scale(45), height: scale(45)}}>
                <LinearGradient
                  colors={LINEARGRADIENT}
                  style={{
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                  }}>
                  <Ionicons
                    name="gift-sharp"
                    color={ICONCOLOR}
                    size={iconSize}
                  />
                </LinearGradient>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default RedeemBalance;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  view: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: scale(5),
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: scale(14),
    color: TEXTBLACK,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  cardSubHeading: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    color: BLACK,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
