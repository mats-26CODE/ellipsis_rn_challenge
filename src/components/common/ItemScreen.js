import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//-> icon imports
import { Ionicons } from "@expo/vector-icons";

//-> asset import
import bottle from "../../../assets/images/bottle.png";

const ItemScreen = ({ itemDetails }) => {
  console.log('my item details', itemDetails);
  return (
    <LinearGradient
      colors={["#fbfaff", "#e6e1f7"]}
      style={styles.itemContainer}
    >
      <View style={styles.itemImageBox}>
        <Image source={bottle} style={styles.itemImage} />
      </View>
      <View style={styles.itemDetailsBox}>
        <View>
          <Text style={styles.itemNameText}>Product One</Text>
        </View>
        <View>
          <Text style={styles.itemDetailText}>
            Lorem ipsum et al to ipsum dolor sit amet dolor sit ame dolor sit
            ame dolor sit ame to ipsum dolor sit amet dolor sit ame dolor sit
            ame dolor sit ame dolor sit ame to ipsum dolor sit amet dolor sit
            ame dolor sit ame dolor sit ame sit ame to ipsum dolor sit amet
            dolor sit ame dolor sit ame dolor sit ame
          </Text>
        </View>
        <View style={styles.itemPriceCartBox}>
          <View>
            <Text style={styles.itemPriceText}>$99</Text>
          </View>
          <TouchableOpacity style={styles.itemCartBox}>
            <Ionicons name="ios-cart-outline" size={24} color="#b6aaec" />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingTop: 30,
  },
  itemImageBox: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  itemImage: {
    width: 90,
    resizeMode: "contain",
  },
  itemDetailsBox: {
    flex: 2,
    padding: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
  },
  itemPriceCartBox: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
  },
  itemNameText: {
    fontFamily: "NunitoBold",
    fontSize: 20,
    paddingBottom: 5,
  },
  itemDetailText: {
    fontFamily: "NunitoRegular",
    fontSize: 14,
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

export default ItemScreen;
