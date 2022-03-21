import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import { useSelector } from "react-redux";
import { selectItem } from "../../../features/itemSlice";

import ItemCard from "./ItemCard";

const ItemsAll = () => {
  const productItems = useSelector(selectItem);
  console.log("my products in home", productItems);

  const renderAllItems = () => {
    return (
      <FlatList
        data={productItems.itemData}
        renderItem={({ item, index }) => <ItemCard item={item} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    );
  };

  return <View style={styles.itemsAllContainer}>{renderAllItems()}</View>;
};

const styles = StyleSheet.create({
  itemsAllContainer: {
    flex: 1,
    paddingTop: 10,
  },
});

export default ItemsAll;
