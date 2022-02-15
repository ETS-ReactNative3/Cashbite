import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale } from "react-native-size-matters";
import Card from "../../components/cards/Card";
import Divider from "../../components/divider/Divider";
import { HEADINGCOLOR, SCREEN } from "../../constants/colors";
import Header from "../../components/headers/Header";
const LastPurachseScreen = ({ route }) => {
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} title={route.name} back />
      <Card style={{ marginTop: scale(20) }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>#CASH0001</Text>
        </View>
        <Divider style={{ marginVertical: scale(10) }} />
        <View style={styles.titleContainer}>
          <Text style={styles.textRegular}>Store: </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.textRegular}>Purchased On: </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.textRegular}>Paid: </Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.textRegular}>Cashback Amount: </Text>
        </View>
      </Card>
    </View>
  );
};

export default LastPurachseScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: scale(16),
    alignItems: "center",
    backgroundColor: SCREEN,
  },
  titleContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    textAlign: "left",
    alignSelf: "flex-start",
    fontFamily: "Poppins-Medium",
    fontSize: scale(15),
    lineHeight: scale(23),
    color: HEADINGCOLOR,
  },
  textRegular: {
    textAlign: "left",
    alignSelf: "flex-start",
    fontFamily: "Poppins-Regular",
    fontSize: scale(12),
    lineHeight: scale(18),
    color: HEADINGCOLOR,
  },
});
