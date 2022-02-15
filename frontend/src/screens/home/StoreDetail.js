import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/dimensions';
import {scale} from 'react-native-size-matters';
import {DOMINOS, FLIPCART, MYNTRA, MEDLIFE} from '../../constants/images';
import StoreCard from '../../components/cards/StoreCard';
import {
  CASHBACKRATES,
  LASTPURCHASE,
  MAKEPROFIT,
  STOREDETAILS,
  USEFULLTIPS,
} from '../../constants/routeNames';
import {
  GREEN,
  HEADINGCOLOR,
  PRIMARY,
  SCREEN,
  INPUTTEXT,
  PLACEHOLDERTEXT,
  BLUE,
  PURPLE,
  LINEARGRADIENT,
} from '../../constants/colors';
import Card from '../../components/cards/Card';
import Headings from '../../components/headings/Headings';
import {NOTIFI, TEMPSTATUS, TESTTEXT} from '../../tempData/tempText';
import Divider from '../../components/divider/Divider';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SearchPlate from '../../components/searchBarPlate/SearchPlate';
import ButtonMain from '../../components/buttons/ButtonMain';
import {ProgressBar} from 'react-native-paper';
import Header from '../../components/headers/Header';
import {iconSize} from '../../constants/iconSize';
import LinearGradient from 'react-native-linear-gradient';
const StoreDetail = ({route, navigation}) => {
  const {img, store, dis} = route.params;
  const renderData = ({item}) => {
    return (
      <View style={styles.dataContainer}>
        <View style={styles.dataLine}>
          <Text style={styles.dataTitle}>{item.payDate}</Text>
          <Text style={styles.dataParam}>{item.date}</Text>
        </View>
        <View style={styles.dataLine}>
          <Text style={styles.dataTitle}>{item.trackSpeed}</Text>
          <Text style={styles.dataParam}>{item.speed}</Text>
        </View>
        <View style={styles.dataLine}>
          <Text style={styles.dataTitle}>{item.cashback}</Text>
          <Text style={{...styles.dataParam, color: GREEN}}>{item.stats}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} back title={route.name} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={img}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.storeNameContainer}>
          <Text style={styles.storeText}>{store}</Text>
        </View>
        <View style={styles.storeNameContainer}>
          <Text style={styles.discountText}>Get Up To {dis}</Text>
        </View>
        <Card style={{marginTop: scale(18), flexDirection: 'row'}}>
          <View style={styles.dataContainer}>
            <View style={styles.dataLine}>
              <Text style={styles.dataTitle}>{TEMPSTATUS.payDate}</Text>
              <Text style={styles.dataParam}>{TEMPSTATUS.date}</Text>
            </View>
            <View style={styles.dataLine}>
              <Text style={styles.dataTitle}>{TEMPSTATUS.trackSpeed}</Text>
              <Text style={styles.dataParam}>{TEMPSTATUS.speed}</Text>
            </View>
            <View style={styles.dataLine}>
              <Text style={styles.dataTitle}>{TEMPSTATUS.cashback}</Text>
              <Text style={{...styles.dataParam, color: GREEN}}>
                {TEMPSTATUS.stats}
              </Text>
            </View>
          </View>
        </Card>
        <Headings title={'About' + ' ' + store} />
        <Card>
          <Text style={styles.dataTitle}>{TESTTEXT}</Text>
        </Card>
        <Headings title="Cashback Status" />
        <Card style={{flexDirection: 'row'}}>
          <View style={styles.dataContainer}>
            <View style={styles.dataLine}>
              <Text style={styles.dataTitle}>{TEMPSTATUS.payDate}</Text>
              <Text style={styles.dataParam}>{TEMPSTATUS.date}</Text>
            </View>
            <View style={styles.dataLine}>
              <Text style={styles.dataTitle}>{TEMPSTATUS.trackSpeed}</Text>
              <Text style={styles.dataParam}>{TEMPSTATUS.speed}</Text>
            </View>
            <View style={styles.dataLine}>
              <Text style={styles.dataTitle}>{TEMPSTATUS.cashback}</Text>
              <Text style={{...styles.dataParam, color: GREEN}}>
                {TEMPSTATUS.stats}
              </Text>
            </View>
          </View>
        </Card>
        <Divider />
        <TouchableOpacity
          style={styles.cardTipsContainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(LASTPURCHASE)}>
          <Card style={styles.cardTips}>
            <View style={styles.infoCircleContainer}>
              <Text style={{...styles.storeText, fontSize: scale(15)}}>
                Last purchased on 10 March 2021
              </Text>
              <View style={styles.infoCircle}>
                <AntDesign name="infocirlce" size={scale(12)} color="black" />
              </View>
            </View>
            <View style={styles.chevron}>
              <Entypo name="chevron-right" size={scale(24)} color={PRIMARY} />
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.cardTipsContainer, marginTop: scale(10)}}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(USEFULLTIPS)}>
          <Card style={styles.cardTips}>
            <Text style={{...styles.storeText, fontSize: scale(15)}}>
              Usefull Tips
            </Text>
            <View style={styles.chevron}>
              <Entypo name="chevron-right" size={scale(24)} color={PRIMARY} />
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.cardTipsContainer, marginTop: scale(10)}}
          activeOpacity={0.7}
          onPress={() => navigation.navigate(CASHBACKRATES)}>
          <Card style={styles.cardTips}>
            <Text style={{...styles.storeText, fontSize: scale(15)}}>
              Cashback Rates
            </Text>
            <View style={styles.chevron}>
              <Entypo name="chevron-right" size={scale(24)} color={PRIMARY} />
            </View>
          </Card>
        </TouchableOpacity>
        <Divider />
        <Headings title="Task" styleC={{marginTop: 6}} />
        <Card style={{paddingTop: 0}}>
          <View style={styles.offBlueBanner}>
            <Text style={{...styles.storeText, color: SCREEN}}>20% OFF</Text>
          </View>
          <View style={styles.taskImageContainer}>
            <View style={styles.taskImage}>
              <Image
                source={{
                  uri: 'https://www.noticebard.com/wp-content/uploads/2021/02/Tata-CLiQ-Backend-Engineer-Hiring-Challenge-1.jpg',
                }}
                style={{height: '100%', width: '100%', resizeMode: 'contain'}}
              />
            </View>
            <View style={styles.taskTextContainer}>
              <Text style={{...styles.dataTitle, lineHeight: 15}}>
                {NOTIFI}
              </Text>
            </View>
          </View>
        </Card>
        {/* title */}
        <Headings title="Deep Link" />
        {/* card*/}
        <Card>
          <View style={styles.cardItemConatiner}>
            <Text style={styles.cardText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
          <SearchPlate style={{marginVertical: scale(18)}}>
            <View style={styles.searchPlateTextInputContainer}>
              <TextInput
                placeholder="Paste Link"
                placeholderTextColor={PLACEHOLDERTEXT}
                numberOfLines={1}
                style={styles.input}
              />
            </View>
            <View style={styles.searchPlateIconContainer}>
              <FontAwesome5 name="link" color={PRIMARY} size={iconSize} />
            </View>
          </SearchPlate>
          <ButtonMain
            style={styles.cardButton}
            onPress={() => navigation.navigate(MAKEPROFIT)}>
            <Text style={{...styles.buttonText, color: PRIMARY}}>
              Make Profit Link
            </Text>
          </ButtonMain>
        </Card>
        <Headings title="Cashback History" />
        <Card>
          <View style={styles.cashCardPopularityContainer}>
            <Text style={styles.dataTitle}>Popularity Meter</Text>
          </View>
          <View style={{width: '100%', marginVertical: scale(10)}}>
            <ProgressBar
              progress={0.4}
              color={BLUE}
              style={{
                height: scale(24),
                borderRadius: scale(24),
                backgroundColor: SCREEN,
                borderColor: BLUE,
                borderWidth: 1,
              }}
            />
          </View>
          <View style={styles.cashCardCashbackContainer}>
            <Text style={{...styles.dataTitle, textAlignVertical: 'center'}}>
              Cashback Earned:
            </Text>
            <Text style={{...styles.dataTitle, fontFamily: 'Poppins-Semibold'}}>
              Rs. 20,000
            </Text>
          </View>
        </Card>
        {/* title */}
        <Headings title="Popular Stores" seeAll="View All" />
        <View style={styles.popularStoresContainer}>
          <StoreCard
            storeImg={FLIPCART}
            storeName="Flipcart"
            discounts="20% Discount"
            goToScreen={STOREDETAILS}
          />
          <StoreCard
            storeImg={DOMINOS}
            storeName="Domino's"
            discounts="20% Discount"
            goToScreen={STOREDETAILS}
          />
        </View>
        <View style={{...styles.popularStoresContainer, marginTop: scale(14)}}>
          <StoreCard
            storeImg={MYNTRA}
            storeName="Myntra"
            discounts="50% Discount"
            goToScreen={STOREDETAILS}
          />
          <StoreCard
            storeImg={MEDLIFE}
            storeName="Med Life"
            discounts="10% Discount"
            goToScreen={STOREDETAILS}
          />
        </View>
      </ScrollView>
      <View style={styles.loginButtonContainer}>
        <ButtonMain style={styles.button}>
          <LinearGradient
            colors={LINEARGRADIENT}
            style={styles.buttontextContainer}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <Text style={styles.buttonText}>Activate</Text>
          </LinearGradient>
        </ButtonMain>
      </View>
    </View>
  );
};

export default StoreDetail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  scrollView: {
    width: windowWidth,
    marginBottom: scale(70),
  },
  mainContainer: {
    alignItems: 'center',
    width: windowWidth,
    paddingHorizontal: scale(15),
    paddingBottom: scale(30),
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: windowHeight * 0.22,
  },
  storeNameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 7,
  },
  storeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    textAlign: 'center',
    color: HEADINGCOLOR,
  },
  discountText: {
    fontFamily: 'Poppins-Bold',
    fontSize: scale(20),
    textAlign: 'center',
    color: HEADINGCOLOR,
  },
  dataContainer: {
    width: '100%',
    height: '100%',
  },
  dataLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scale(2),
  },
  dataTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    color: HEADINGCOLOR,
  },
  dataParam: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    color: HEADINGCOLOR,
  },
  cardTipsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTips: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(12),
  },
  infoCircleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  infoCircle: {
    padding: scale(2),
    alignItems: 'center',
  },
  chevron: {alignItems: 'center', justifyContent: 'center'},
  cardItemConatiner: {
    width: '100%',
    padding: scale(2),
    justifyContent: 'center',
  },
  cardText: {
    //
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    color: HEADINGCOLOR,
  },
  searchPlateIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.1,
    height: '100%',
  },
  searchPlateTextInputContainer: {
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  input: {
    height: '100%',
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: scale(12),
    color: INPUTTEXT,
  },
  cardButton: {
    borderColor: PRIMARY,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'left',
  },
  cashCardPopularityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  cashCardCashbackContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  popularStoresContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    padding: scale(2),
    justifyContent: 'space-between',
  },
  offBlueBanner: {
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(30),
    marginBottom: scale(12),
  },
  taskImageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: scale(100),
    justifyContent: 'space-between',
  },
  taskImage: {
    width: scale(100),
    height: scale(100),
    overflow: 'hidden',
    flex: 0.35,
  },
  taskTextContainer: {
    height: '100%',
    flex: 0.65,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(5),
  },
  loginButtonContainer: {
    position: 'absolute',
    bottom: scale(18.5),
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
