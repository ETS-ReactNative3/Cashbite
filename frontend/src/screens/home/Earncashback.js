import React, { useRef, useState, useCallback } from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import Header from "../../components/headers/Header";
import { scale } from "react-native-size-matters";
import { PLACEHOLDERTEXT, SCREEN, ICONCOLOR } from "../../constants/colors";
import { windowWidth } from "../../utils/dimensions";
import Card from "../../components/cards/Card";
import CashbackTextComponent from "../../components/textComponents/CashbackTextComponent";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FilterButton from "../../components/buttons/FilterButton";
import { iconSize } from "../../constants/iconSize";

const Earncashback = ({ route }) => {
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} title={route.name} back />
      <ScrollView
        contentContainerStyle={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.videoContainer}>
          <FilterButton onPress={{}}>
            <FontAwesome name="play" size={iconSize} color={ICONCOLOR} />
          </FilterButton>
        </View>
        <Card>
          <CashbackTextComponent title="Step 1" />
        </Card>
        <Card style={{ marginVertical: scale(16) }}>
          <CashbackTextComponent title="Step 2" />
        </Card>
        <Card>
          <CashbackTextComponent title="Step 3" />
        </Card>
        <Card style={{ marginVertical: scale(16) }}>
          <CashbackTextComponent title="Step 4" />
        </Card>
        <Card>
          <CashbackTextComponent title="Step 5" />
        </Card>
      </ScrollView>
    </View>
  );
};

export default Earncashback;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: SCREEN,
  },
  mainContainer: {
    width: windowWidth,
    alignItems: "center",
    paddingHorizontal: scale(16),
    paddingBottom: scale(50),
    marginTop: scale(20),
  },
  videoContainer: {
    width: "100%",
    backgroundColor: PLACEHOLDERTEXT,
    height: windowWidth * 0.45,
    borderRadius: scale(20),
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: scale(25),
  },
});
