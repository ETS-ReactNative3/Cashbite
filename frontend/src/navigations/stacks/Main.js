import React from 'react';
import {
  Modal,
  Platform,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import HomeScreen from '../../screens/home/HomeScreen';
import FilterScreen from '../../screens/home/FilterScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  ACTIVITIES,
  ALLSTORE,
  AUTHSTACK,
  BANK,
  CASHBACKACTIVITY,
  CASHBACKCLAIMS,
  CASHBACKRATES,
  CONTACT,
  DEEPLINK,
  EARNCASHBACK,
  FAQ,
  FILTER,
  GIFTVOUCHER,
  HOME,
  LASTPURCHASE,
  LOGIN,
  MAKEPROFIT,
  NOTIFICATIONS,
  OVERVIEW,
  PAYMENTSETTINGS,
  PROFILE,
  REDEEMBALANCE,
  REFERNOW,
  STOREDETAILS,
  USEFULLTIPS,
  WALLET,
  WALLETSCREEN,
} from '../../constants/routeNames';
import PopularStoresScreen from '../../screens/home/PopularStoresScreen';
import StoreDetail from '../../screens/home/StoreDetail';
import LastPurachseScreen from '../../screens/home/LastPurachseScreen';
import MakeProfit from '../../screens/home/MakeProfit';
import NotificationsScreen from '../../screens/home/NotificationsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReferNow from '../../screens/home/ReferNow';
import Overview from '../../screens/home/Overview';
import Contact from '../../screens/home/Contact';
import {
  BLACK,
  DRAWERBACKGROUND,
  HEADINGCOLOR,
  ICONCOLOR,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  PRIMARY,
  SCREEN,
  SEARCHBAR,
  SHADOWCOLOR,
} from '../../constants/colors';
import {scale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Earncashback from '../../screens/home/Earncashback';
import ActivitiesTask from '../../screens/home/ActivitiesTask';
import Profile from '../../screens/profile/Profile';
import DeepLink from '../../screens/deepLink/DeepLink';
import Wallet from '../../screens/wallet/Wallet';
import CashBackActivity from '../../screens/cashback/CashBackActivity';
import Faq from '../../screens/faq/Faq';
import CustomDrawer from '../../components/customDrawer/CustomDrawer';
import {iconSize, tabIconSize} from '../../constants/iconSize';
import PaymentSettings from '../../screens/payementSettings/PaymentSettings';
import cashbackClaims from '../../screens/cashbackClaims/cashbackClaims';
import RedeemBalance from '../../screens/redeemBalance/RedeemBalance';
import UsefullTipsScreen from '../../screens/home/UsefullTipsScreen';
import CashbackRates from '../../screens/home/CashbackRates';
import {windowWidth} from '../../utils/dimensions';
import WalletScreen from '../../screens/wallet/WalletScreen';
import GiftVoucher from '../../screens/wallet/GiftVoucher';
import BankTransfer from '../../screens/wallet/BankTransfer';
import LoginScreen from '../../screens/auth/LoginScreen';
import Neumorphism from 'react-native-neumorphism';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const RedeemStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const CustomReferButton = ({children, onPress}) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={styles.customButtonContainer}>
    <Neumorphism
      lightColor={SEARCHBAR}
      darkColor={SHADOWCOLOR}
      shapeType={'basin'}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        radius: scale(35),
      }}>
      <LinearGradient
        colors={LINEARGRADIENT}
        style={styles.customButtonGradient}>
        <View style={styles.customButtonIconContainer}>{children}</View>
      </LinearGradient>
    </Neumorphism>
  </TouchableOpacity>
);

const Main = () => {
  return (
    <Drawer.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: scale(-15),
          fontFamily: 'Poppins-Regular',
          fontSize: scale(15),
          lineHeight: scale(23),
        },
        drawerActiveTintColor: PRIMARY,
        drawerInactiveTintColor: HEADINGCOLOR,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={HOME}
        component={HomeScreenStack}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={iconSize} />
          ),
        }}
      />
      <Drawer.Screen
        name={PROFILE}
        component={Profile}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" color={color} size={iconSize} />
          ),
        }}
      />
      <Drawer.Screen
        name={DEEPLINK}
        component={DeepLink}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="link" color={color} size={iconSize} />
          ),
        }}
      />
      <Drawer.Screen
        name={CASHBACKACTIVITY}
        component={CashBackActivity}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="linechart" color={color} size={iconSize} />
          ),
        }}
      />
      <Drawer.Screen
        name={WALLET}
        component={Wallet}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="wallet" color={color} size={iconSize} />
          ),
        }}
      />
      <Drawer.Screen
        name={PAYMENTSETTINGS}
        component={PaymentSettings}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="payment" color={color} size={iconSize} />
          ),
        }}
      />
      <Drawer.Screen
        name={CASHBACKCLAIMS}
        component={cashbackClaims}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons
              name="monetization-on"
              color={color}
              size={iconSize}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={REDEEMBALANCE}
        component={RedeemScreenStack}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="redeem" color={color} size={iconSize} />
          ),
        }}
      />
      <Drawer.Screen
        name={FAQ}
        component={Faq}
        options={{
          drawerIcon: ({color}) => (
            <AntDesign name="questioncircleo" color={color} size={iconSize} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default Main;

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: PRIMARY,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.barStyle,
      }}>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home-outline" color={color} size={tabIconSize} />
          ),
        }}
      />
      <Tab.Screen
        name={ALLSTORE}
        component={PopularStoresScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              size={tabIconSize}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={REFERNOW}
        component={ReferNow}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="rupee" color={ICONCOLOR} size={tabIconSize} />
          ),
          tabBarButton: props => <CustomReferButton {...props} />,
        }}
      />
      <Tab.Screen
        name={OVERVIEW}
        component={Overview}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              name="md-document-text-outline"
              color={color}
              size={tabIconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CONTACT}
        component={Contact}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign
              name="customerservice"
              size={tabIconSize}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const HomeScreenStack = ({route}) => {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="home">
      <HomeStack.Screen name="home" component={TabStack} />
      <HomeStack.Screen name={NOTIFICATIONS} component={NotificationsScreen} />
      <HomeStack.Screen name={STOREDETAILS} component={StoreDetail} />
      <HomeStack.Screen name={FILTER} component={FilterScreen} />
      <HomeStack.Screen name={LASTPURCHASE} component={LastPurachseScreen} />
      <HomeStack.Screen name={ACTIVITIES} component={ActivitiesTask} />
      <HomeStack.Screen name={MAKEPROFIT} component={MakeProfit} />
      <HomeStack.Screen name={USEFULLTIPS} component={UsefullTipsScreen} />
      <HomeStack.Screen name={CASHBACKRATES} component={CashbackRates} />
      <HomeStack.Screen name={EARNCASHBACK} component={Earncashback} />
    </HomeStack.Navigator>
  );
};

const RedeemScreenStack = () => {
  return (
    <RedeemStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Redeem">
      <RedeemStack.Screen name="Redeem" component={RedeemBalance} />
      <RedeemStack.Screen name={WALLETSCREEN} component={WalletScreen} />
      <RedeemStack.Screen name={BANK} component={BankTransfer} />
      <RedeemStack.Screen name={GIFTVOUCHER} component={GiftVoucher} />
      <RedeemStack.Screen name={LOGIN} component={LoginScreen} />
    </RedeemStack.Navigator>
  );
};
const styles = StyleSheet.create({
  customButtonContainer: {
    top: scale(-37),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SEARCHBAR,
    height: scale(65),
    width: scale(65),
    borderRadius: scale(35),
  },
  customButtonGradient: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButtonIconContainer: {
    width: '100%',
    height: '100%',
  },
  barStyle: {
    padding: Platform.OS === 'ios' ? scale(10) : 0,
    alignItems: 'center',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    backgroundColor: SCREEN,
    height: Platform.OS === 'ios' ? 85 : 75,
    elevation: 10,
    shadowColor: Platform.OS === 'ios' ? SHADOWCOLOR : null,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowRadius: scale(8),
    shadowOpacity: 1,
  },
});

// old
// const HomeScreenStack = ({route}) => {
//   return (
//     <HomeStack.Navigator
//       screenOptions={{headerShown: false}}
//       initialRouteName={HOME}>
//       <HomeStack.Screen name={HOME} component={HomeScreen} />
//       <HomeStack.Screen name={NOTIFICATIONS} component={NotificationsScreen} />
//       <HomeStack.Screen name={STOREDETAILS} component={StoreDetail} />
//       <HomeStack.Screen name={FILTER} component={FilterScreen} />
//       <HomeStack.Screen name={LASTPURCHASE} component={LastPurachseScreen} />
//       <HomeStack.Screen name={MAKEPROFIT} component={MakeProfit} />
//       <HomeStack.Screen name={EARNCASHBACK} component={Earncashback} />
//       <HomeStack.Screen name={ACTIVITIES} component={ActivitiesTask} />
//       <HomeStack.Screen name={USEFULLTIPS} component={UsefullTipsScreen} />
//       <HomeStack.Screen name={CASHBACKRATES} component={CashbackRates} />
//     </HomeStack.Navigator>
//   );
// };
// const TabStack = () => {
//   return (
//     <Tab.Navigator
// screenOptions={{
//   tabBarActiveTintColor: PRIMARY,
//   headerShown: false,
//   tabBarShowLabel: false,
//   tabBarStyle: styles.barStyle,
//       }}>
//       <Tab.Screen
//         name="home"
//         component={HomeScreenStack}
//         options={{
//           tabBarIcon: ({color}) => (
//             <Ionicons name="home-outline" color={color} size={tabIconSize} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={ALLSTORE}
//         component={PopularStoresScreen}
//         options={{
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons
//               name="storefront-outline"
//               size={tabIconSize}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={REFERNOW}
//         component={ReferNow}
//         options={{
//           tabBarIcon: () => (
//             <FontAwesome name="rupee" color={ICONCOLOR} size={tabIconSize} />
//           ),
//           tabBarButton: props => <CustomReferButton {...props} />,
//         }}
//       />
//       <Tab.Screen
//         name={OVERVIEW}
//         component={Overview}
//         options={{
//           tabBarIcon: ({color}) => (
//             <Ionicons
//               name="md-document-text-outline"
//               color={color}
//               size={tabIconSize}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name={CONTACT}
//         component={Contact}
//         options={{
//           tabBarIcon: ({color}) => (
//             <AntDesign
//               name="customerservice"
//               size={tabIconSize}
//               color={color}
//             />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
