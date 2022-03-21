import React from "react";
import { View, StyleSheet, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text>I am home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
