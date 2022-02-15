import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Surface, Badge} from 'react-native-paper';
import {
  BLUE,
  DRAWERBACKGROUND,
  ICONCOLOR,
  LINEARGRADIENT,
  TEXTWHITE,
} from '../../constants/colors';
import {windowWidth} from '../../utils/dimensions';
import {scale} from 'react-native-size-matters';
import {NOTIFICATIONS} from '../../constants/routeNames';
import {useNavigation} from '@react-navigation/core';

const iconSize = scale(24);

const Header = ({menu, back, title, rightComponent, style, notification}) => {
  const navigation = useNavigation();
  const number1 = () => {
    navigation.openDrawer();
    // if (title !== "CashBite") {
    //   navigation.goBack();
    // }
  };

  const [notifications, setNotifications] = useState(true);
  const LeftView = () => (
    <View style={styles.leftView}>
      {menu && (
        <TouchableOpacity activeOpacity={0.7} onPress={() => number1()}>
          <Image
            source={require('../../assets/images/other/menu.png')}
            style={{height: scale(24), width: scale(24)}}
          />
        </TouchableOpacity>
      )}
      {back && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={iconSize} color={ICONCOLOR} />
        </TouchableOpacity>
      )}
      {title && (
        <View style={{marginLeft: scale(27)}}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </View>
  );
  const RightView = () =>
    rightComponent ? (
      <View style={styles.rightView}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.rowView}
          onPress={() => navigation.navigate(NOTIFICATIONS)}>
          <Feather name="bell" size={iconSize} color={ICONCOLOR} />
          {notifications ? (
            <Badge
              style={{
                position: 'absolute',
                top: 1,
                right: 2,
                backgroundColor: BLUE,
              }}
              size={scale(8)}
            />
          ) : (
            <View />
          )}
        </TouchableOpacity>
      </View>
    ) : (
      rightComponent
    );
  return (
    <Surface style={{...styles.mainContainer, elevation: 10, ...style}}>
      <StatusBar backgroundColor={DRAWERBACKGROUND} barStyle="light-content" />
      <LinearGradient
        colors={LINEARGRADIENT}
        style={{
          ...styles.mainContainer,
          height: Platform.OS === 'ios' ? scale(100) : scale(75),
        }}>
        <View style={styles.header}>
          <LeftView />
          <RightView />
        </View>
      </LinearGradient>
    </Surface>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: scale(20),
    borderBottomRightRadius: scale(20),
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(16),
    position: 'absolute',
    top: Platform.OS === 'ios' ? scale(50) : scale(30),
  },
  leftView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: scale(17),
    lineHeight: scale(26),
    color: TEXTWHITE,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
