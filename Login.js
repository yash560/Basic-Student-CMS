import React, { useState } from "react";
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
import { auth } from "./firebase";
const Login = ({ navigation }) => {
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [error, seterror] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: "https://ik.imagekit.io/Yash/login_p5ixi7NpH.png" }}
        />
      </View>
      <View style={styles.headText}>Welcome Back</View>
      <View style={styles.label}>Email Address </View>{" "}
      <TextInput
        onChangeText={(text) => {
          setemail(text);
        }}
        value={email}
        style={styles.input}
        placeholder="Enter your Email Address"
        keyboardType="numeric"
      />{" "}
      <View style={styles.label}>Password </View>{" "}
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setpassword(text);
        }}
        value={password}
        placeholder="Enter your Password"
        keyboardType="numeric"
        secureTextEntry
      />{" "}
      <View style={styles.forgot}>Forgot Password ?</View>{" "}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            auth
              .signInWithEmailAndPassword(email.trim().toLowerCase(), password)
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
          Login{" "}
        </TouchableOpacity>
      </View>{" "}
      <View style={styles.lastText}>New to this Experience ?</View>{" "}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signup");
        }}
        style={styles.createText}
      >
        Create an Account
      </TouchableOpacity>{" "}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  headText: {
    marginLeft: "auto",
    marginTop: 5,
    marginBottom: 0,
    marginRight: "auto",
    textAlign: "center",
    borderRadius: 10,
    fontWeight: 700,
    color: "#0b121d",
    padding: 10,
    fontSize: 25,
    color: "#1d1d1d",
  },
  picker: {
    width: "90%",
    borderColor: "#c2c2c2",

    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    width: "90%",
    borderColor: "#c2c2c2",
    margin: "auto",
    marginTop: 5,
    fontSize: 12,
    fontFamily: "Inter",
    paddingLeft: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
  labelText: {
    color: "#747474",
    fontSize: 10,
    marginTop: 3,
    textAlign: "left",
    width: "90%",
  },
  label: {
    margin: "auto",

    color: "#000",
    fontSize: 12,
    marginTop: 10,
    textAlign: "left",
    width: "90%",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    height: 40,
    width: "90%",
    flexDirection: "row",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#006afe",
    height: 40,
    width: "100%",

    borderRadius: 5,
    display: "flex",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    position: "relative",
    display: "flex",
    marginTop: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: 600,
    fontFamily: "Inter",
    padding: 5,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 80,
    marginLeft: "auto",
    marginRight: "auto",

    backgroundColor: "#ccecec",
    marginTop: 10,
    borderRadius: "50%",
  },
  headTextUI: {
    marginLeft: "auto",
    marginTop: 10,
    marginBottom: 0,
    marginRight: "auto",
    textAlign: "center",
    borderRadius: 10,

    color: "#0b121d",
    padding: 10,
    fontSize: 18,
    color: "#1d1d1d",
  },
  subText: {
    height: 30,
    fontSize: 14,
    margin: "auto",

    marginTop: 0,
    fontWeight: 400,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 0,
    marginBottom: 15,
    color: "#000",
    width: "80%",
  },
  forgot: {
    height: 30,
    fontSize: 12,
    textAlign: "right",
    margin: "auto",
    padding: 0,
    backgroundColor: "#fff",
    color: "#747474",
    width: "90%",
    marginTop: 5,
  },
  lastText: {
    height: 30,
    fontSize: 12,
    textAlign: "center",
    margin: "auto",

    padding: 10,
    color: "#747474",
    width: "80%",
  },
  createText: {
    margin: "auto",

    height: 30,
    fontSize: 12,
    textAlign: "right",
    color: "#0b121d",
  },
  agreeText: {
    height: 10,
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
