import React from "react";
import { View, StyleSheet, Text, FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import { selectCart } from "../../features/cartSlice";

//-> icon imports
import { Ionicons } from "@expo/vector-icons";

//-> component import
import ItemCartCard from "./subComponents/ItemCartCard";
import NavigateBack from "../common/NavigateBack";
import Button from "../common/Button";

const CartScreen = () => {
  //-> call redux items state
  const cart = useSelector(selectCart);

  const renderCartItems = () => {
    return (
      <FlatList
        data={cart}
        renderItem={({ item, index }) => <ItemCartCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  const renderSubmitButton = () => {
    if (cart.length !== 0) {
      return <Button text={"Submit"} />;
    }
  };

  return (
    <View style={styles.cartContainer}>
      <NavigateBack />
      <View style={styles.cartHeaderBox}>
        <Text style={styles.cartHeaderText}>Items in your cart </Text>
        <Ionicons name="ios-cart-outline" size={24} color="#b6aaec" />
      </View>

      <View style={styles.cartItemsBox}>
        <SafeAreaView>{renderCartItems()}</SafeAreaView>
        <SafeAreaView>{renderSubmitButton()}</SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  cartHeaderBox: {
    flex: 0.5,
    paddingTop: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cartHeaderText: {
    fontFamily: "NunitoBold",
    fontSize: 20,
  },
  cartItemsBox: {
    flex: 5,
    padding: 10,
  },
});

export default CartScreen;
