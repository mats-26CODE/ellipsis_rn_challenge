import React from "react";
import { View, StyleSheet, Text } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.settingsContainer}>
      <Text>I am Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SettingsScreen;
