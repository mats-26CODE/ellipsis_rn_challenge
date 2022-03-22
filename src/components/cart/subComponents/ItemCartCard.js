import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../features/cartSlice";

//-> icon imports
import { Ionicons } from "@expo/vector-icons";

//-> asset import
import bottle from "../../../../assets/images/bottle.png";

const ItemCartCard = ({ item }) => {
  //-> Accessing the navigation prop
  const navigation = useNavigation();

  //-> call dispatch to redux
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <TouchableOpacity
      style={styles.itemBox}
      onPress={() =>
        navigation.navigate("Home", {
          screen: "ItemScreen",
          params: { itemDetails: item },
        })
      }
    >
      <View style={styles.itemImageBox}>
        {/* image */}
        <Image source={bottle} style={styles.itemImage} />
      </View>
      <View>
        <View style={styles.itemNameBox}>
          {/* name */}
          <Text style={styles.itemNameText}>{item.name}</Text>
        </View>
        <View style={styles.itemDetailBox}>
          {/* details*/}
          <Text style={styles.itemDetailText}>{item.detail}</Text>
        </View>
        <View style={styles.itemPriceCartBox}>
          <View>
            <Text style={styles.itemPriceText}>${item.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.itemRemoveBox}
            onPress={() => handleRemoveFromCart(item)}
          >
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    flex: 1,
    backgroundColor: "#f1f0f7",
    borderRadius: 10,
    marginVertical: 5,
    minHeight: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  itemImageBox: {
    alignItems: "center",
    justifyContent: "center",
    height: 140,
    padding: 5,
    width: "20%",
  },
  itemImage: {
    width: 50,
    resizeMode: "contain",
  },
  itemNameBox: {
    marginVertical: 2,
    padding: 5,
  },
  itemDetailBox: {
    marginVertical: 2,
    padding: 5,
    height: 40,
    width: "80%",
  },
  itemPriceCartBox: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e5e4eb",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 5,
  },
  itemNameText: {
    fontFamily: "NunitoBold",
    fontSize: 16,
  },
  itemDetailText: {
    fontFamily: "NunitoRegular",
    fontSize: 13,
  },
  itemPriceText: {
    fontFamily: "NunitoBold",
    fontSize: 20,
  },
  itemRemoveBox: {
    borderColor: "#b6aaec",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ItemCartCard;
