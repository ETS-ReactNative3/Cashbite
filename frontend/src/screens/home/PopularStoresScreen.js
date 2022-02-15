import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { storeData } from "../../tempData/bannerData";
import StoreCard from "../../components/cards/StoreCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowWidth, windowHeight } from "../../utils/dimensions";
import { scale } from "react-native-size-matters";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import Octicons from "react-native-vector-icons/Octicons";
import { STOREDETAILS } from "../../constants/routeNames";
import {
  INPUTTEXT,
  LINEARGRADIENT,
  PLACEHOLDERTEXT,
  SCREEN,
  SEARCHBAR,
  SEARCHION,
} from "../../constants/colors";
import Header from "../../components/headers/Header";
const PopularStoresScreen = ({ navigation, route }) => {
  // Stores
  const renderStore = ({ item }) => {
    return (
      <View style={styles.popularStoreCardContainer}>
        <StoreCard
          storeImg={item.image}
          storeName={item.storeName}
          discounts={item.discounts}
          goToScreen={STOREDETAILS}
        />
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <Header rightComponent={false} menu title={route.name} />
      <View style={styles.mainContainer}>
        {/* search */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchIconContainer}>
              <FontAwesome name="search" color={SEARCHION} size={scale(18)} />
            </View>
            <View style={styles.searchTextContainer}>
              <TextInput
                style={styles.input}
                numberOfLines={1}
                placeholder="Search here..."
                placeholderTextColor={PLACEHOLDERTEXT}
              />
            </View>
          </View>
          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={styles.filter}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Filter")}
            >
              <LinearGradient colors={LINEARGRADIENT} style={styles.filter}>
                <Octicons
                  name="settings"
                  size={scale(18)}
                  color="white"
                  style={{ transform: [{ rotateZ: "90deg" }] }}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        {/* Stores */}
        <View style={styles.listContainer}>
          <FlatList
            data={storeData}
            keyExtractor={(item) => item.Key}
            renderItem={renderStore}
            scrollEventThrottle={16}
            numColumns={2}
            initialNumToRender={4}
            horizontal={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              height: "100%",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default PopularStoresScreen;

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
    paddingBottom: 20,
  },
  searchContainer: {
    padding: scale(2),
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: scale(20),
  },
  searchBar: {
    flex: 1,
    height: windowWidth * 0.12,
    borderRadius: scale(20),
    flexDirection: "row",
    backgroundColor: SEARCHBAR,
    marginRight: scale(15),
  },
  searchIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 0.2,
  },
  searchTextContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: "100%",
    width: "100%",
    fontFamily: "Poppins-Regular",
    fontWeight: "400",
    fontSize: scale(14),
    color: INPUTTEXT,
  },
  filterContainer: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: windowHeight * 0.055,
    padding: scale(2),
  },
  filter: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    alignItems: "center",
    justifyContent: "center",
  },
  popularStoreCardContainer: {
    flex: 1,
    padding: scale(2),
    width: "100%",
    paddingVertical: scale(6),
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    width: windowWidth,
    backgroundColor: "white",
    marginTop: 26,
  },
});
