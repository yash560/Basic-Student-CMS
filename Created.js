import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, StatusBar } from "react-native";
import { Icon } from "react-native-elements";
const Created = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Icon color="#006afe" name="people" size={70} />
      </View>
      <View style={styles.headText}>Welcome !</View>
      <View style={styles.subText}>
        Dear user your Account has been Created Successfully. Continue to Start
        Using App
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Email");
          }}
          style={styles.button}
        >
          Continue
        </TouchableOpacity>
      </View>
      <View style={styles.agreeText}>
        By clicking Continue you Agree to ur Privacy Policy and Terms and
        Conditions
      </View>
    </View>
  );
};

export default Created;

const styles = StyleSheet.create({
  color: { color: "#0b121d" },

  label: {
    color: "#747474",
    fontSize: 12,
    marginTop: 20,
    textAlign: "left",
    width: "90%",
  },
  InputContainer: {
    backgroundColor: "#fff",
    height: 60,
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    height: 100,
    width: "100%",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#006afe",
    height: 40,
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    display: "flex",
    borderColor: "#c2c2c2",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    position: "relative",
    display: "flex",
    fontWeight: 600,
    fontFamily: "Inter",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 120,
    backgroundColor: "#ccecec",
    marginTop: 60,
    borderRadius: 30,
  },
  headText: {
    marginLeft: "auto",
    marginTop: 10,
    marginBottom: 0,
    marginRight: "auto",
    textAlign: "center",
    borderRadius: 10,
    fontWeight: 800,
    color: "#0b121d",
    padding: 10,
    fontSize: 18,
    color: "#1d1d1d",
  },
  subText: {
    height: 30,
    fontSize: 12,
    marginTop: 0,

    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    marginBottom: 10,
    color: "#747474",
  },
  agreeText: {
    height: 30,
    fontSize: 10,
    marginTop: 0,

    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    marginBottom: 10,
    color: "#747474",
  },
});
