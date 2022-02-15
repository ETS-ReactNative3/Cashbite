import React, {useState} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  DRAWERBACKGROUND,
  HEADINGCOLOR,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  SCREEN,
  TEXTWHITE,
} from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {iconSize} from '../../constants/iconSize';
import {PROFILE} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{backgroundColor: DRAWERBACKGROUND}}>
        <View
          style={{
            width: '100%',
            backgroundColor: SCREEN,
          }}>
          <LinearGradient colors={LINEARGRADIENT} style={styles.gradientBox}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate(PROFILE)}>
              <Avatar.Image
                size={scale(110)}
                source={require('../../assets/images/other/Avatar.jpg')}
              />
            </TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: scale(5),
              }}>
              <Text style={styles.userName}>Jhon Doe</Text>
              <Text style={styles.emailId}>johndoe123@gmail.com</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.itemListBackground}>
          <DrawerItemList {...props} />
          {/* <TouchableOpacity style={styles.logoutContainer} activeOpacity={0.7}>
            <AntDesign name="poweroff" size={iconSize} color={HEADINGCOLOR} />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: scale(15),
                lineHeight: scale(23),
                marginLeft: scale(10),
                color: HEADINGCOLOR,
              }}>
              Logout
            </Text>
          </TouchableOpacity> */}
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
          padding: Platform.OS === 'ios' ? scale(15) : scale(10),
        }}>
        <Text style={{...styles.emailId, color: PLACEHOLDERTEXT}}>
          Version 1.0
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomRightRadius: scale(20),
    borderBottomLeftRadius: scale(20),
    padding: 10,
  },
  userName: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(15),
    lineHeight: scale(23),
    color: TEXTWHITE,
  },
  emailId: {
    fontFamily: 'Poppins-Regular',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: TEXTWHITE,
  },
  itemListBackground: {
    flex: 1,
    backgroundColor: SCREEN,
    paddingTop: scale(10),
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(17.5),
    height: scale(45),
  },
});
