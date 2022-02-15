import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Header from '../../components/headers/Header';
import {
  BLACK,
  HEADINGCOLOR,
  PRIMARY,
  SCREEN,
  SECONDARY,
} from '../../constants/colors';
import {scale} from 'react-native-size-matters';
import {windowWidth} from '../../utils/dimensions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Card from '../../components/cards/Card';
import {NOTIFI} from '../../tempData/tempText';
const UsefullTipsScreen = ({route, navigation}) => {
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} back title={route.name} />
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <MaterialCommunityIcons
            name="lightbulb-on-outline"
            size={scale(50)}
            color={SECONDARY}
          />
        </View>
        <Card style={styles.card}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: scale(5),
            }}>
            <MaterialCommunityIcons
              name="cards-diamond"
              size={scale(10)}
              color={BLACK}
            />
            <Text style={styles.text}>{NOTIFI}</Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: scale(5),
            }}>
            <MaterialCommunityIcons
              name="cards-diamond"
              size={scale(10)}
              color={BLACK}
            />
            <Text style={styles.text}>{NOTIFI}</Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: scale(5),
            }}>
            <MaterialCommunityIcons
              name="cards-diamond"
              size={scale(10)}
              color={BLACK}
            />
            <Text style={styles.text}>{NOTIFI}</Text>
          </View>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <MaterialCommunityIcons
              name="cards-diamond"
              size={scale(10)}
              color={BLACK}
            />
            <Text style={styles.text}>{NOTIFI}</Text>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

export default UsefullTipsScreen;

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
  card: {
    marginTop: scale(15),
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(12),
    textAlign: 'left',
    color: HEADINGCOLOR,
    paddingHorizontal: scale(10),
  },
});
