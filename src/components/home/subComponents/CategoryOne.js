import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CategoryOne = () => {
  return (
    <View style={styles.categoryOneContainer}>
      <Text>Category One Items</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryOneContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default CategoryOne;
