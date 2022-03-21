import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableOpacityComponent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

//-> icon imports
import { Ionicons } from "@expo/vector-icons";

//-> asset import
import bottle from "../../../../assets/images/bottle.png";

const ItemCard = ({ item }) => {
  //-> Accessing the navigation prop
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.itemBox}
      onPress={() =>
        navigation.navigate("Home", { screen: "ItemScreen", itemDetails: item })
      }
    >
      <View style={styles.itemImageBox}>
        {/* image */}
        <Image source={bottle} style={styles.itemImage} />
      </View>
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
        <TouchableOpacity style={styles.itemCartBox}>
          <Ionicons name="ios-cart-outline" size={24} color="#b6aaec" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemBox: {
    backgroundColor: "#f1f0f7",
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    minHeight: 204,
  },
  itemImageBox: {
    alignItems: "center",
    justifyContent: "center",
    height: 140,
    padding: 5,
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
  itemCartBox: {
    borderColor: "#b6aaec",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ItemCard;
