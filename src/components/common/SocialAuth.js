import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  Ionicons,
} from "@expo/vector-icons";

const SocialAuth = () => {
  return (
    <View style={styles.socialBoxes}>
      <TouchableOpacity style={styles.socialBox}>
        <Text>
          <Ionicons name="ios-logo-google" size={28} color="lightgray" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBox}>
        <Text>
          <Ionicons name="ios-logo-apple" size={28} color="lightgray" />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialBox}>
        <Text>
          <Ionicons name="ios-logo-facebook" size={28} color="lightgray" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialBox: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginVertical: 9,
    borderRadius: 15,
    borderColor: "#F0AD00",
    borderWidth: 2,
  },
});

export default SocialAuth;
