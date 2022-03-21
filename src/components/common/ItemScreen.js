import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ItemScreen = () => {
  return (
    <View style={styles.itemContainer}>
      <Text>I am Item details screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ItemScreen;
