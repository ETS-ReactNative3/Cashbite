import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/headers/Header';
import {scale} from 'react-native-size-matters';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {windowWidth} from '../../utils/dimensions';
import {
  BLACK,
  INPUTTEXT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  SEARCHBAR,
  SEARCHION,
} from '../../constants/colors';
import Card from '../../components/cards/Card';
import {NOTIFI} from '../../tempData/tempText';
const Faq = ({route}) => {
  const [open, setIsOpen] = useState(false);
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} title={route.name} menu />
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
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsOpen(!open)}
        style={{width: '100%'}}>
        <Card>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: scale(10.5),
                textAlign: 'left',
                textAlignVertical: 'center',
                color: BLACK,
              }}>
              Note: Flipkart and Amazon Vouchers can only be redeemed in
              multiples of Rs. 50/-
            </Text>
            {open ? (
              <Entypo name="chevron-down" color={PRIMARY} size={scale(18)} />
            ) : (
              <Entypo name="chevron-up" color={PRIMARY} size={scale(18)} />
            )}
          </View>
          {open && (
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                marginTop: scale(10),
              }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  fontSize: scale(10.5),
                  textAlign: 'left',
                  textAlignVertical: 'center',
                  color: BLACK,
                }}>
                {NOTIFI}
              </Text>
            </View>
          )}
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default Faq;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: SCREEN,
    paddingHorizontal: scale(15),
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
});
