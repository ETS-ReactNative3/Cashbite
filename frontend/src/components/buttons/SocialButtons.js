import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { scale } from "react-native-size-matters";
const SocialButtons = ({ children, onPress, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ ...styles.filter, ...style }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  filter: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    alignItems: "center",
    justifyContent: "center",
  },
});
