import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
import Header from '../../components/headers/Header';
import {
  BLACK,
  HEADINGCOLOR,
  INPUTTEXT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  SEARCHBAR,
  SEARCHION,
  SECONDARY,
} from '../../constants/colors';
import {scale} from 'react-native-size-matters';
import {windowWidth} from '../../utils/dimensions';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Card from '../../components/cards/Card';
import {NOTIFI} from '../../tempData/tempText';
import Divider from '../../components/divider/Divider';
const CashbackRates = ({route, navigation}) => {
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} back title={route.name} />
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <FontAwesome5Icon
            name="rupee-sign"
            size={scale(50)}
            color={SECONDARY}
          />
        </View>
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
        </View>
        <Card>
          <Text style={styles.percentage}>50%</Text>
          <View style={styles.row}>
            <View
              style={{
                width: scale(20),
                height: scale(20),
                borderRadius: scale(15),
                backgroundColor: SEARCHBAR,
                position: 'absolute',
                left: scale(-24),
              }}
            />
            <Divider />
            <View
              style={{
                width: scale(20),
                height: scale(20),
                borderRadius: scale(15),
                backgroundColor: SEARCHBAR,
                left: scale(5),
              }}
            />
          </View>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: scale(11),
              color: BLACK,
              textAlign: 'left',
            }}>
            {NOTIFI}
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};

export default CashbackRates;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
  },
  mainContainer: {
    alignItems: 'center',
    width: windowWidth,
    paddingHorizontal: scale(16),
    paddingBottom: scale(35),
    paddingTop: scale(10),
  },
  imageContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: windowWidth * 0.3,
    width: windowWidth * 0.3,
    borderRadius: windowWidth * 0.15,
    borderColor: SECONDARY,
    borderWidth: 1,
  },
  searchContainer: {
    padding: scale(2),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: scale(20),
  },
  searchBar: {
    flex: 1,
    height: windowWidth * 0.12,
    borderRadius: scale(20),
    flexDirection: 'row',
    backgroundColor: SEARCHBAR,
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
  },
  input: {
    height: '100%',
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: scale(14),
    color: INPUTTEXT,
  },
  percentage: {
    width: '100%',
    fontFamily: 'Poppins-SemiBold',
    fontSize: scale(15),
    color: BLACK,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
