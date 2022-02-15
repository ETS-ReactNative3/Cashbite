import React, {useRef, useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import {windowWidth, windowHeight} from '../../utils/dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import Headings from '../../components/headings/Headings';
import {
  DOT,
  DOTINACTIVE,
  HEADINGCOLOR,
  INPUTTEXT,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  SEARCHBAR,
  SEARCHION,
  SECONDARY,
} from '../../constants/colors';
import {bannerData} from '../../tempData/bannerData';
import StoreCard from '../../components/cards/StoreCard';
import {DOMINOS, FLIPCART, MYNTRA, MEDLIFE} from '../../constants/images';
import Card from '../../components/cards/Card';
import {TESTTEXT} from '../../tempData/tempText';
import ButtonMain from '../../components/buttons/ButtonMain';
import SearchPlate from '../../components/searchBarPlate/SearchPlate';
import IconCard from '../../components/cards/IconCard';
import {
  ACTIVITIES,
  ALLSTORE,
  EARNCASHBACK,
  MAKEPROFIT,
  REFERNOW,
  STOREDETAILS,
} from '../../constants/routeNames';
import Header from '../../components/headers/Header';
import FilterButton from '../../components/buttons/FilterButton';
import {iconSize} from '../../constants/iconSize';

const HomeScreen = ({navigation, route}) => {
  const flatlistRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [viewableItems, setViewableItems] = useState([]);

  const handleViewableItemsChanged = useRef(({viewableItems}) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);
  // Banner
  const renderBannerItem = ({item}) => {
    return (
      <View style={styles.bannerlistContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>
      </View>
    );
  };
  // Pagination
  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {
          // No. of dots
          [...Array(bannerData.length)].map((_, index) => (
            <View
              key={index}
              style={{
                ...styles.dots,
                backgroundColor: index == currentPage ? DOT : DOTINACTIVE,
              }}
            />
          ))
        }
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <Header rightComponent={true} title="CashBite" menu />
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        {/* search */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchIconContainer}>
              <FontAwesome name="search" color={SEARCHION} size={scale(18)} />
            </View>
            <View style={styles.searchTextContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder="Search here..."
                placeholderTextColor={PLACEHOLDERTEXT}
              />
            </View>
          </View>
          <View style={styles.filterContainer}>
            <FilterButton onPress={() => navigation.navigate('Filter')}>
              <Octicons
                name="settings"
                size={iconSize}
                color="white"
                style={{transform: [{rotateZ: '90deg'}]}}
              />
            </FilterButton>
          </View>
        </View>
        {/* title */}
        <Headings title="Categories" />
        {/* horizontal scroll for icons*/}
        <ScrollView
          horizontal
          contentContainerStyle={styles.floatingCategoryContainer}
          style={{
            width: windowWidth,
            height: windowWidth * 0.35,
            backgroundColor: SCREEN,
          }}
          showsHorizontalScrollIndicator={false}>
          <IconCard
            title="All Stores"
            icon={
              <FontAwesome5 name="store" size={iconSize} color={SECONDARY} />
            }
            goToScreen={ALLSTORE}
          />
          <IconCard
            title="Beauty & Health"
            icon={
              <MaterialCommunityIcons
                name="bottle-tonic-outline"
                size={iconSize}
                color={SECONDARY}
              />
            }
          />
          <IconCard
            title="Travel"
            icon={
              <FontAwesome name="plane" size={iconSize} color={SECONDARY} />
            }
          />
          <IconCard
            title="Food & Dining"
            icon={
              <Ionicons
                name="fast-food-outline"
                size={iconSize}
                color={SECONDARY}
              />
            }
          />
          <IconCard
            title="Fashion"
            icon={
              <Ionicons
                name="ios-shirt-outline"
                size={iconSize}
                color={SECONDARY}
              />
            }
          />
          <IconCard
            title="Food & Dining"
            icon={
              <Ionicons
                name="fast-food-outline"
                size={iconSize}
                color={SECONDARY}
              />
            }
          />
        </ScrollView>

        {/* banner */}
        <View style={styles.bannerContainer}>
          <FlatList
            data={bannerData}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.Key}
            renderItem={renderBannerItem}
            ref={flatlistRef}
            onViewableItemsChanged={handleViewableItemsChanged.current}
            viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
            initialNumToRender={1}
            extraData={windowWidth}
            scrollEventThrottle={16}
          />
          {renderPagination()}
        </View>
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
        {/* section divison*/}
        <View style={styles.activitiesAndTaskContainer}>
          {/* title */}
          <View style={styles.activitiesImageandTextContainer}>
            <Headings
              title="Activities & Tasks"
              style={{color: 'white'}}
              styleC={{marginTop: 0, width: '30%'}}
            />
            <View style={styles.activitiesAndTaskImageContainer}>
              <Image
                source={require('../../assets/images/banners/banner2.webp')}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.activitiesAndTaskTextContainer}>
            <Text style={styles.activitiesAndTaskText}>{TESTTEXT}</Text>
          </View>
          <ButtonMain
            onPress={() => navigation.navigate(ACTIVITIES)}
            style={{width: windowWidth * 0.8}}>
            <LinearGradient
              colors={LINEARGRADIENT}
              style={styles.buttontextContainer}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 0}}>
              <Text style={styles.buttonText}>View task</Text>
            </LinearGradient>
          </ButtonMain>
        </View>
        {/* title */}
        <Headings title="How To Earn Cashback" />
        <Card style={styles.earnCashBackCard}>
          <View style={styles.earnCashBackCardImageContainer}>
            <Image
              source={require('../../assets/images/other/howtoearn.png')}
              style={styles.referCardImage}
            />
          </View>
          <ImageBackground
            style={styles.earnCashBackCardTextContainer}
            source={require('../../assets/images/other/ic_cashback_bg.png')}>
            <Text
              style={{
                ...styles.cardText,
                textAlign: 'left',
                paddingHorizontal: scale(10),
              }}>
              Lorem ipsum dummy text is paragraph text at any place.
            </Text>
            <View style={styles.filterContainer}>
              <TouchableOpacity
                style={styles.filter}
                activeOpacity={0.7}
                onPress={() => navigation.navigate(EARNCASHBACK)}>
                <LinearGradient colors={LINEARGRADIENT} style={styles.filter}>
                  <FontAwesome
                    name="arrow-right"
                    size={iconSize}
                    color="white"
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  ...styles.buttonText,
                  color: PRIMARY,
                  fontSize: scale(14),
                }}>
                Check Now
              </Text>
            </View>
          </ImageBackground>
        </Card>
        {/* title */}
        <Headings title="Refer & Earn" />
        <Card style={styles.referCard}>
          <View style={styles.referCardImageContainer}>
            <View style={styles.referCardImageContainer}>
              <Image
                source={require('../../assets/images/other/ic_referr_earn.png')}
                style={styles.referCardImage}
              />
            </View>
          </View>
          <View style={styles.referCardButtonContainer}>
            <ButtonMain
              style={styles.referCardButton}
              onPress={() => navigation.navigate(REFERNOW)}>
              <Text
                style={{
                  ...styles.buttonText,
                  color: SCREEN,
                  fontSize: scale(12),
                }}>
                Refer Now
              </Text>
            </ButtonMain>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  mainContainer: {
    width: windowWidth,
    alignItems: 'center',
    paddingHorizontal: scale(16),
    paddingBottom: scale(30),
  },
  searchContainer: {
    padding: scale(2),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  searchBar: {
    flex: 1,
    height: windowWidth * 0.132,
    borderRadius: scale(20),
    flexDirection: 'row',
    backgroundColor: SEARCHBAR,
    marginRight: scale(15),
  },
  searchIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.2,
  },
  searchTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  input: {
    height: '100%',
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: scale(12),
    color: INPUTTEXT,
  },
  filterContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: windowHeight * 0.055,
    padding: scale(2),
  },
  filter: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingCategoryContainer: {
    width: windowWidth * 1.2,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bannerContainer: {
    marginTop: scale(15),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
  bannerlistContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
  imageContainer: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.42,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#E5E5E5',
  },
  image: {width: '100%', height: '100%'},
  paginationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: scale(7),
    width: '100%',
  },
  dots: {
    width: scale(7),
    height: scale(7),
    borderRadius: scale(7),
    marginRight: scale(8),
  },
  popularStoresContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    padding: scale(2),
    justifyContent: 'space-between',
  },
  cardItemConatiner: {
    width: '100%',
    padding: scale(2),
    justifyContent: 'center',
  },
  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(11.5),
    color: HEADINGCOLOR,
  },
  activitiesAndTaskContainer: {
    width: windowWidth,
    backgroundColor: SEARCHION,
    alignItems: 'center',
    marginTop: scale(15),
    padding: scale(16),
  },
  activitiesImageandTextContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  activitiesAndTaskImageContainer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    overflow: 'hidden',
    height: windowWidth * 0.55,
    marginBottom: scale(9),
  },
  activitiesAndTaskTextContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: scale(26),
  },
  activitiesAndTaskText: {
    fontSize: scale(12),
    fontFamily: 'Poppins-Regular',
    color: SCREEN,
    textAlign: 'left',
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
    textAlignVertical: 'center',
  },
  cardButton: {
    borderColor: PRIMARY,
    borderWidth: 1,
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
  earnCashBackCard: {
    flexDirection: 'row',
    padding: 0,
  },
  earnCashBackCardImageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: windowHeight * 0.2,
    paddingHorizontal: scale(14),
  },
  earnCashBackCardTextContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: windowHeight * 0.2,
  },
  referCard: {
    backgroundColor: '#F4B359',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  referCardButtonContainer: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  referCardImageContainer: {
    width: '75%',
    height: windowHeight * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: scale(5),
  },
  referCardImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  referCardButton: {
    backgroundColor: 'transparent',
    borderColor: SCREEN,
    borderWidth: 1,
    width: windowWidth * 0.4,
    height: windowWidth * 0.12,
  },
});
