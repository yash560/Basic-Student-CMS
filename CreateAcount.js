import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
  StatusBar,
  Image,
  Picker,
} from "react-native";
import { db } from "./firebase";
import { auth } from "./firebase";

const Create = ({ navigation }) => {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [error, seterror] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headText}>Create your Account</View>

      <View style={styles.label}>Email Address </View>
      <TextInput
        onChangeText={(text) => {
          setemail(text);
        }}
        value={email}
        style={styles.input}
        keyboardType="email-address"
        placeholder="Enter Your Email"
      />
      <View style={styles.label}>Password </View>
      <TextInput
        onChangeText={(text) => {
          setpassword(text);
        }}
        value={password}
        secureTextEntry
        style={styles.input}
        placeholder="Enter Your Password"
        keyboardType="default"
      />
      {/* <View style={styles.labelText}>
        When you update your Phone Number ,a 4 digit phone number will be send
        via SMS to verify you .
      </View> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            auth
              .createUserWithEmailAndPassword(
                email.trim().toLowerCase(),
                password
              )
              .then((auth) => {
                console.log(auth);
                if (auth) {
                  navigation.navigate("Login");
                }
              })
              .catch((error) => {
                seterror(error.message);
              });
          }}
          style={styles.button}
        >
          Sign up
        </TouchableOpacity>
      </View>
      <View style={styles.subTextLast}>Or continue to login page {error}</View>
      <View style={styles.socialButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.socialButton}
        >
          <View style={styles.image}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: "https://ik.imagekit.io/Yash/login_icon_RZbsD0bqo.png",
              }}
            />
          </View>
          <View style={styles.socialButtonText}>Login</View>
        </TouchableOpacity>
      </View>
      <View style={styles.agreeText}>
        By clicking "Sign up" you agree to our following Terms And Conditions as
        well as Privacy Policy
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
    width: "40%",
    height: "50%",
    alignItems: "flex-start",
    justifyContent: "center",
    position: "absolute",
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  socialButtonText: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: "90%",
    borderColor: "#c2c2c2",
    backgroundColor: "transparent",
    marginTop: 5,
    borderWidth: 1,
    height: 35,
    borderRadius: 5,
    color: "#616161",
    fontSize: 13,
    paddingLeft: 10,
  },
  input: { borderColor: "#000" },
  input: {
    width: "90%",
    borderColor: "#c2c2c2",

    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    height: 35,
    borderRadius: 5,
    color: "#616161",
    fontSize: 13,
    paddingLeft: 10,
  },
  labelText: {
    color: "#000",
    fontSize: 10,
    marginTop: 5,
    textAlign: "left",
    width: "90%",
  },
  label: {
    color: "#000",
    fontSize: 12,
    marginTop: 10,
    textAlign: "left",
    width: "90%",
  },
  buttonContainer: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  socialButtonContainer: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#fff",

    marginBottom: 45,
  },
  socialButton: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    height: 38,
    width: "90%",
    borderRadius: 5,
    display: "flex",
    color: "#000",
    marginLeft: 10,
    padding: 10,
    fontSize: 15,
    fontWeight: 600,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#006afe",
    height: 38,
    width: "90%",
    margin: "auto",
    borderRadius: 5,
    display: "flex",
    color: "#fff",
    fontSize: 15,
    fontWeight: 500,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  container: {
    position: "relative",
    display: "flex",
    fontFamily: "Inter",
    color: "#0b121d",
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    padding: 0,
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  headText: {
    marginTop: 10,
    marginBottom: 0,
    marginRight: "auto",
    textAlign: "left",
    borderRadius: 10,
    fontWeight: 800,

    color: "#0b121d",
    paddingLeft: 15,
    fontSize: 25,
  },
  subText: {
    fontSize: 13,
    color: "#616161",

    marginRight: "auto",

    marginTop: 5,
    fontWeight: 1400,
    textAlign: "left",
    paddingLeft: 15,
    marginBottom: 10,
  },
  subTextLast: {
    fontSize: 13,
    color: "#616161",
    marginTop: 20,

    marginRight: "auto",
    width: "100%",
    marginTop: 5,
    fontWeight: 1400,
    paddingTop: 25,

    textAlign: "center",
    marginBottom: 10,
  },
  agreeText: {
    fontSize: 10,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    color: "#0b121d",
    width: "75%",
  },
});
