import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../components/headers/Header';
import {scale, verticalScale} from 'react-native-size-matters';
import {
  PRIMARY,
  SCREEN,
  LINEARGRADIENT,
  ICONCOLOR,
  PLACEHOLDERTEXT,
  FACEBOOK,
  WHATSAPP,
  TWITTER,
  HEADINGCOLOR,
  BLACK,
} from '../../constants/colors';
import {NOTIFI, REFERLINK, REFERTEXT} from '../../tempData/tempText';
import Foundation from 'react-native-vector-icons/Foundation';
import {windowWidth} from '../../utils/dimensions';
import LinearGradient from 'react-native-linear-gradient';
import FilterButton from '../../components/buttons/FilterButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {iconSize} from '../../constants/iconSize';
import Headings from '../../components/headings/Headings';
import SearchPlate from '../../components/searchBarPlate/SearchPlate';
import Card from '../../components/cards/Card';
import ButtonMain from '../../components/buttons/ButtonMain';
import Divider from '../../components/divider/Divider';
import SocialButtons from '../../components/buttons/SocialButtons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const ReferNow = ({route}) => {
  return (
    <View style={styles.mainContainer}>
      <Header rightComponent={false} menu title={route.name} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewBox}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/other/gift.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>GET 20% OFF</Text>
          <Text style={styles.textSub}>{REFERTEXT}</Text>
          <TouchableOpacity style={styles.link} activeOpacity={0.7}>
            <Text style={{...styles.textSub, color: PRIMARY}}>{REFERLINK}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <FilterButton onPress={{}}>
            <Foundation name="pencil" size={iconSize} color={ICONCOLOR} />
          </FilterButton>
          <FilterButton onPress={{}}>
            <MaterialIcons
              name="content-copy"
              size={iconSize}
              color={ICONCOLOR}
            />
          </FilterButton>
          <FilterButton onPress={{}}>
            <MaterialIcons name="share" size={iconSize} color={ICONCOLOR} />
          </FilterButton>
        </View>
        <Headings title="Inite By Email" />
        <Card>
          <SearchPlate>
            <TextInput
              style={styles.invite}
              placeholder="Enter Email Id"
              placeholderTextColor={PLACEHOLDERTEXT}
              numberOfLines={1}
            />
          </SearchPlate>
          <ButtonMain style={{marginVertical: verticalScale(10)}}>
            <LinearGradient
              colors={LINEARGRADIENT}
              style={styles.buttontextContainer}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}>
              <Text style={styles.buttonText}>Invite</Text>
            </LinearGradient>
          </ButtonMain>
          <View style={styles.dividerView}>
            <Divider style={{width: '40%'}} />
            <Text
              style={{
                ...styles.textSub,
                marginTop: 0,
                color: PLACEHOLDERTEXT,
              }}>
              or
            </Text>
            <Divider style={{width: '40%'}} />
          </View>

          <Text
            style={{
              ...styles.textSub,
              marginTop: 0,
              color: PLACEHOLDERTEXT,
              alignSelf: 'flex-start',
              paddingHorizontal: 0,
            }}>
            Invite via
          </Text>
          <View
            style={{
              ...styles.iconContainer,
              width: '100%',
              marginVertical: scale(10),
            }}>
            <View style={styles.iconBox}>
              <SocialButtons
                style={{backgroundColor: FACEBOOK, marginBottom: scale(5)}}>
                <FontAwesome5
                  name="facebook"
                  size={iconSize}
                  color={ICONCOLOR}
                />
              </SocialButtons>
              <Text style={styles.socialText}>Facebook</Text>
            </View>
            <View style={styles.iconBox}>
              <SocialButtons
                style={{backgroundColor: WHATSAPP, marginBottom: scale(5)}}>
                <FontAwesome5
                  name="whatsapp"
                  size={iconSize}
                  color={ICONCOLOR}
                />
              </SocialButtons>
              <Text style={styles.socialText}>Whatsapp</Text>
            </View>
            <View style={styles.iconBox}>
              <SocialButtons
                style={{backgroundColor: FACEBOOK, marginBottom: scale(5)}}>
                <FontAwesome5
                  name="facebook-messenger"
                  size={iconSize}
                  color={ICONCOLOR}
                />
              </SocialButtons>
              <Text style={styles.socialText}>Messenger</Text>
            </View>
            <View style={styles.iconBox}>
              <SocialButtons
                style={{backgroundColor: TWITTER, marginBottom: scale(5)}}>
                <FontAwesome5
                  name="twitter"
                  size={iconSize}
                  color={ICONCOLOR}
                />
              </SocialButtons>
              <Text style={styles.socialText}>Twitter</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default ReferNow;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  scrollView: {
    width: windowWidth,
    alignSelf: 'center',
    flex: 1,
  },
  scrollViewBox: {
    paddingHorizontal: scale(16),
    alignItems: 'center',
    paddingBottom: scale(35),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    padding: scale(5),
  },
  image: {
    width: scale(150),
    height: scale(150),
    alignSelf: 'center',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(5),
  },
  textHeading: {
    fontFamily: 'Poppins-Bold',
    fontSize: scale(20),
    lineHeight: scale(30),
    textAlign: 'center',
    width: '100%',
    color: HEADINGCOLOR,
  },
  textSub: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    textAlign: 'center',
    paddingHorizontal: scale(20),
    marginTop: verticalScale(5),
    color: HEADINGCOLOR,
  },
  link: {
    marginTop: verticalScale(10),
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '50%',
    padding: scale(2),
  },
  invite: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: scale(11),
    textAlign: 'left',
    color: BLACK,
  },
  buttontextContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: scale(13.5),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'center',
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialText: {
    fontSize: scale(10.5),
    fontFamily: 'Poppins-Medium',
    color: BLACK,
    textAlign: 'center',
  },
});
