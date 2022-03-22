import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CategoryOne = () => {
  return (
    <View style={styles.categoryOneContainer}>
      <Text style={styles.categoryHeader}>Category One Items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryOneContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  categoryHeader: {
    fontFamily: 'NunitoRegular',
    fontSize: 14,
  }
});

export default CategoryOne;
