import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  FORGOT_PASSWORD,
  LOGIN,
  MAINSTACK,
  ONE_STEP_TO_GO,
  VERIFY_OTP,
} from '../../constants/routeNames';
import LoginScreen from '../../screens/auth/LoginScreen';
import OneStepScreen from '../../screens/auth/OneStepScreen';
import ForgotPasswordScreen from '../../screens/auth/ForgotPasswordScreen';
import Main from './Main';
import VerifyOTP from '../../screens/auth/VerifyOTP';

const Auth = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={LOGIN}>
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={VERIFY_OTP} component={VerifyOTP} />
      <AuthStack.Screen name={ONE_STEP_TO_GO} component={OneStepScreen} />
      <AuthStack.Screen
        name={FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen name={MAINSTACK} component={Main} />
    </AuthStack.Navigator>
  );
};

export default Auth;
