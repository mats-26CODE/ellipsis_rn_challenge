import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//-> component imports
import Input from "../common/Input";
import Button from "../common/Button";

//-> file imports
import shop from "../../../assets/images/shop.png";
import SocialAuth from "../common/SocialAuth";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [initialPassword, setInitialPassword] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.authContainer}>
        <View style={styles.artworkBox}>
          <Image style={styles.artwork} source={shop} />
        </View>
        <View style={styles.socialAuthBox}>
          <Text style={styles.authHeadingText}>Sign up using</Text>
          <SocialAuth />
        </View>
        <View style={styles.orBox}>
          <Text style={styles.orText}>or register via email</Text>
        </View>
        <View style={styles.inputBox}>
          <Input
            placeholder={"Full Name"}
            value={name}
            onChangeText={setName}
            icon={
              <MaterialIcons name="account-circle" size={20} color="#A5ABAF" />
            }
          />
          <Input
            placeholder={"Email"}
            keyboardType={"email-address"}
            value={email}
            onChangeText={setEmail}
            icon={
              <MaterialIcons name="alternate-email" size={20} color="#A5ABAF" />
            }
          />
          <Input
            placeholder={"Password"}
            secureTextEntry={true}
            value={initialPassword}
            onChangeText={setInitialPassword}
            icon={
              <Ionicons name="lock-closed-outline" size={20} color="#A5ABAF" />
            }
          />
          <Input
            placeholder={"Confirm Password"}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            icon={
              <Ionicons name="lock-closed-outline" size={20} color="#A5ABAF" />
            }
          />
        </View>
        <View style={styles.buttonBox}>
          <Button
            onPress={() => navigation.navigate("AppSpace")}
            text={"Sign up now"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  artworkBox: {
    flex: 1.5,
    alignItems: "center",
  },
  artwork: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  socialAuthBox: {
    flex: 1,
  },
  orBox: {
    flex: 0.5,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  orText: {
    fontFamily: "NunitoRegular",
    fontSize: 14,
    color: "#3C4448",
  },
  inputBox: {
    flex: 3,
    borderRadius: 5,
  },
  buttonBox: {
    flex: 0.5,
    borderRadius: 5,
  },
  authHeadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3C4448",
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "NunitoBold",
  },
});

export default Signup;
