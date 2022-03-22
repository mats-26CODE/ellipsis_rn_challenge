import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectItem } from "../../../features/itemSlice";

import ItemCard from "./ItemCard";

const ItemsAll = () => {
  const productItems = useSelector(selectItem);
  console.log("my products in home", productItems);

  const renderAllItems = () => {
    if (productItems.itemData) {
      const data = productItems.itemData;

      return (
        <FlatList
          data={data}
          renderItem={({ item, index }) => <ItemCard item={item} />}
          keyExtractor={(item, index) => index.toString()}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      );
    } else {
      return (
        <View style={styles.itemsMissingContainer}>
          <Text style={styles.itemsMissingText}>No Products to show</Text>
        </View>
      );
    }
  };

  return <View style={styles.itemsAllContainer}>{renderAllItems()}</View>;
};

const styles = StyleSheet.create({
  itemsAllContainer: {
    flex: 1,
    paddingTop: 10,
  },
  itemsMissingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsMissingText: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
  }
});

export default ItemsAll;
