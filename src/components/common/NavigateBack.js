import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

//-> icon imports
import { Ionicons } from "@expo/vector-icons";

const NavigateBack = () => {
  //-> Accessing the navigation prop
  const navigation = useNavigation();

  return (
    <View style={styles.navigationBackBox}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="ios-arrow-back" size={28} color="#b6aaec" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBackBox: {
    flex: 0.5,
    marginTop: 30,
    marginLeft: 10,
  },
});

export default NavigateBack;
