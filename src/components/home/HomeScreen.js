import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import HomeTabs from "./subComponents/HomeTabs";

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeHeaderBox}>
        <Text style={styles.homeHeaderOneText}>Best Products</Text>
        <Text style={styles.homeHeaderTwoText}>Perfect Choice!</Text>
      </View>

      <View style={styles.homeTabsBox}>
        <HomeTabs />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  homeHeaderBox: {
    flex: 1,
    paddingTop: 30,
  },
  homeHeaderOneText: {
    fontFamily: "NunitoBold",
    fontSize: 25,
    color: "#46454d",
    marginVertical: 2,
  },
  homeHeaderTwoText: {
    fontFamily: "NunitoBold",
    fontSize: 18,
    color: "#8f8f8f",
  },
  homeTabsBox: {
    flex: 6,
  },
});

export default HomeScreen;
