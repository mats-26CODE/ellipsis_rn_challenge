import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.touchButton}>
        <Text style={styles.touchButtonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchButton: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(240, 173, 0, 0.75)",
    borderRadius: 50,
    borderColor: "#F0AD00",
    borderWidth: 1,
    width: "100%",
  },
  touchButtonText: {
    color: "white",
    fontFamily: "NunitoBold",
  },
});

export default Button;
