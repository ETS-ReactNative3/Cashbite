import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Surface} from 'react-native-paper';
import {scale} from 'react-native-size-matters';
import {ICONCOLOR, LINEARGRADIENT, TEXTWHITE} from '../../constants/colors';
import {windowWidth} from '../../utils/dimensions';
import Feather from 'react-native-vector-icons/Feather';

const HeaderNav = ({menu, back, title, style, ...props}) => {
  const iconSize = scale(24);
  const navigation = useNavigation();
  const number1 = () => {
    navigation.openDrawer();
  };
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
  return (
    <Surface style={{...styles.mainContainer, elevation: 10, ...style}}>
      <LinearGradient
        colors={LINEARGRADIENT}
        style={{
          ...styles.mainContainer,
          height: Platform.OS === 'ios' ? scale(115) : scale(100),
        }}>
        <View style={styles.header}>
          <LeftView />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: scale(30),
            top: Platform.OS === 'ios' ? scale(84) : scale(65),
          }}>
          {props.children}
        </View>
      </LinearGradient>
    </Surface>
  );
};

export default HeaderNav;

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
