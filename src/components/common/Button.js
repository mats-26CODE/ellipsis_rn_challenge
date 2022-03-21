import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={["#b6aaec", "#D1C3FE"]}
        start={[0, 0]}
        end={[1, 1]}
        location={[0.25, 0.4, 1]}
        style={styles.touchButton}
      >
        <Text style={styles.touchButtonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchButton: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    width: "100%",
  },
  touchButtonText: {
    color: "white",
    fontFamily: "NunitoBold",
  },
});

export default Button;
