import React, {useRef, useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Header from '../../components/headers/Header';
import {scale} from 'react-native-size-matters';
import {bannerData} from '../../tempData/bannerData';
import {windowWidth} from '../../utils/dimensions';
import {
  SCREEN,
  DOT,
  DOTINACTIVE,
  PRIMARY,
  SECONDARY,
  HEADINGCOLOR,
  GREEN,
  RED,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
} from '../../constants/colors';
import Headings from '../../components/headings/Headings';
import Card from '../../components/cards/Card';
import {ENDDATE, STARTDATE, TESTTEXT} from '../../tempData/tempText';
import Entypo from 'react-native-vector-icons/Entypo';
import {FAQ} from '../../constants/routeNames';
import ButtonMain from '../../components/buttons/ButtonMain';
import LinearGradient from 'react-native-linear-gradient';
const ActivitiesTask = ({navigation, route}) => {
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
  const renderBannerItem = () => {
    return (
      <View style={styles.bannerlistContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/banners/banner2.webp')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
      </View>
    );
  };
  // Pagination
  // const renderPagination = () => {
  //   return (
  //     <View style={styles.paginationContainer}>
  //       {
  //         // No. of dots
  //         [...Array(bannerData.length)].map((_, index) => (
  //           <View
  //             key={index}
  //             style={{
  //               ...styles.dots,
  //               backgroundColor: index == currentPage ? SECONDARY : DOTINACTIVE,
  //             }}
  //           />
  //         ))
  //       }
  //     </View>
  //   );
  // };

  return (
    <View style={styles.screen}>
      <Header rightComponent={false} title={route.name} back />
      <ScrollView
        style={{width: windowWidth, marginBottom: scale(65)}}
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        {/* banner */}
        <View style={styles.bannerContainer}>
          {renderBannerItem()}
          {/* <FlatList
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
          /> */}
          {/* {renderPagination()} */}
        </View>
        <Headings
          title="Earn Rs. 200 On Adobe"
          styleC={{justifyContent: 'center'}}
          style={{fontFamily: 'Poppins-Bold', fontSize: scale(18)}}
        />
        <Card>
          <View style={styles.dataLine}>
            <Text style={styles.dataTitle}>Start Date:</Text>
            <Text style={styles.dataParam}>{STARTDATE}</Text>
          </View>
          <View style={styles.dataLine}>
            <Text style={styles.dataTitle}>End Date:</Text>
            <Text style={{...styles.dataParam, color: RED}}>{ENDDATE}</Text>
          </View>
        </Card>
        <Headings title="About Task" />
        <Card>
          <Text style={styles.dataTitle}>{TESTTEXT}</Text>
        </Card>
        <TouchableOpacity
          style={{...styles.cardTipsContainer, marginTop: scale(10)}}
          activeOpacity={0.7}>
          <Card style={{...styles.cardTips, marginTop: scale(15)}}>
            <Text style={{...styles.dataTitle, fontSize: scale(15)}}>
              FAQ's
            </Text>
            <View style={styles.chevron}>
              <Entypo name="chevron-right" size={scale(24)} color={PRIMARY} />
            </View>
          </Card>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.loginButtonContainer}>
        <ButtonMain style={styles.button}>
          <LinearGradient
            colors={LINEARGRADIENT}
            style={styles.buttontextContainer}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 0}}>
            <Text style={styles.buttonText}>Complete Task</Text>
          </LinearGradient>
        </ButtonMain>
      </View>
    </View>
  );
};

export default ActivitiesTask;

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
  bannerContainer: {
    marginTop: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
  bannerlistContainer: {
    padding: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
  },
  imageContainer: {
    width: windowWidth * 0.35,
    height: windowWidth * 0.55,
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
  dataLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: scale(2),
    width: '100%',
  },
  dataTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    color: HEADINGCOLOR,
  },
  dataParam: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    color: GREEN,
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
  chevron: {alignItems: 'center', justifyContent: 'center'},
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
  button: {
    width: windowWidth * 0.8,
  },
  buttonText: {
    fontSize: scale(15),
    fontFamily: 'Poppins-Medium',
    color: SCREEN,
    textAlign: 'center',
  },
});
