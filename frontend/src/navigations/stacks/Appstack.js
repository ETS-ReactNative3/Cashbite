import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from './Auth';
import Main from './Main';
import {AUTHSTACK, MAINSTACK} from '../../constants/routeNames';
const Appstack = () => {
  const AppStack = createNativeStackNavigator();
  let isLoggedIn = false;
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLoggedIn ? (
        <AppStack.Screen name={MAINSTACK} component={Main} />
      ) : (
        <AppStack.Screen name={AUTHSTACK} component={Auth} />
      )}
    </AppStack.Navigator>
  );
};

export default Appstack;
