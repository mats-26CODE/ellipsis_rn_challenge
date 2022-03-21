import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const Input = ({
  placeholder,
  onChangeText,
  defaultValue,
  icon,
  value,
  secureTextEntry,
  multiline,
  maxLength,
  numberOfLines,
  keyboardType,
}) => {
  return (
    <View style={styles.textInputBox}>
      {icon}
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        value={value}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputBox: {
    // flex: 0.5,
    height: 60,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F2F8FC",
    marginVertical: 8,
    borderRadius: 15,
    paddingLeft: 5,
    paddingRight: 5,
  },
  textInput: {
    maxHeight: 80,
    width: "90%",
    color: "#3C4448",
    fontSize: 16,
    backgroundColor: "transparent",
    padding: 5,
    fontFamily: "NunitoRegular",
    letterSpacing: 2,
  },
});

export default Input;
