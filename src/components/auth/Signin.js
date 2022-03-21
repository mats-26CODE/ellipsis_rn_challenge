import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

//-> file imports
import shop from "../../../assets/images/shop.png";

//-> component imports
import Input from "../common/Input";
import Button from "../common/Button";
import SocialAuth from "../common/SocialAuth";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.loginContainer}>
        <View style={styles.artworkBox}>
          <Image style={styles.artwork} source={shop} />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.authHeadingText}>Login</Text>
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
            value={password}
            onChangeText={setPassword}
            icon={
              <Ionicons name="lock-closed-outline" size={20} color="#A5ABAF" />
            }
          />
          <TouchableWithoutFeedback>
            <Text style={styles.warningText}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.buttonBox}>
          <Button
            onPress={() => navigation.navigate("AppSpace")}
            text={"Login now"}
          />
        </View>
        <View style={styles.socialAuthBox}>
          <View style={styles.orBox}>
            <Text style={styles.orText}>or login using</Text>
          </View>
          <SocialAuth />
        </View>
        <View style={styles.signupRedirect}>
          <Text style={styles.warnText}>Don't have an account?</Text>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.registerRedirectText}>Register now</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  artworkBox: {
    flex: 0.4,
    alignItems: "center",
  },
  artwork: {
    width: 180,
    height: 180,
    resizeMode: "contain",
  },
  inputBox: {
    flex: 1.5,
    borderRadius: 5,
  },
  buttonBox: {
    flex: 0.5,
    borderRadius: 5,
    justifyContent: "center",
    marginVertical: 5,
  },
  authHeadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3C4448",
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "NunitoBold",
  },
  warningText: {
    fontSize: 15,
    fontStyle: "italic",
    color: "#EE4339",
    marginTop: 5,
    marginBottom: 5,
    fontFamily: "NunitoRegular",
    textAlign: "right",
  },
  warnText: {
    fontSize: 15,
    color: "#3C4448",
    fontFamily: "NunitoRegular",
  },
  socialAuthBox: {
    flex: 1.5,
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
  signupRedirect: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "center",
  },
  registerRedirectText: {
    fontSize: 15,
    color: "#b6aaec",
    fontFamily: "NunitoBold",
    marginLeft: 5,
  },
});

export default Signin;
