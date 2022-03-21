import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CartScreen = () => {
  return (
    <View style={styles.cartContainer}>
      <Text>I am Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CartScreen;
