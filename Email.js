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
import { Icon } from "react-native-elements/dist/icons/Icon";
import { updateProfile } from "firebase/auth";
import { auth } from "./firebase";

const Email = ({ navigation }) => {
  const [name, setname] = React.useState("");
  const user = auth.currentUser;
  useEffect(() => {
    if (user.displayName) {
      // navigation.navigate("Phone");
      setname(user.displayName);
    } else {
      setname("");
    }
  }, [user]);
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://ik.imagekit.io/Yash/note-letter-block-a51ucqjl177s56cd8i08d_LqzDUDs7d.png",
          }}
        />
      </View>
      <View style={styles.headText}>Tell us your Name</View>
      <View style={styles.subText}>You can change this later</View>
      <View style={styles.InputContainer}>
        <TextInput
          placeholder={user.displayName ? user.displayName : "Enter Name"}
          onChangeText={(text) => {
            setname(text);
          }}
          value={name}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            user
              .updateProfile({
                displayName: name,
              })
              .then(() => {
                // Update successful
                // ...
                console.log(" Update successful");
                navigation.navigate("Phone");
              })
              .catch((error) => {
                // An error occurred
                // ...
                console.log(" An error occurred");
                console.log(error);
              });
          }}
          style={styles.button}
        >
          Proceed
        </TouchableOpacity>
      </View>
      <View style={styles.agreeText}>
        Mention your name used in
        <View style={styles.color}>official government identity </View>
      </View>
    </View>
  );
};

export default Email;

const styles = StyleSheet.create({
  picker: {
    width: "90%",
    borderColor: "#c2c2c2",

    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccecec",
    backgroundColor: "#ccecec",
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  tinyLogo: {
    width: "100%",
    height: "100%",
  },
  labelText: {
    color: "#747474",
    fontSize: 10,
    marginTop: 5,
    textAlign: "left",
    width: "90%",
  },
  color: { color: "#0b121d" },
  buttonLogin: {
    backgroundColor: "#fff",
    height: 40,
    width: 100,
    borderRadius: 5,
    fontSize: 12,
    borderWidth: 1,
    display: "flex",
    borderColor: "#c2c2c2",
    color: "#0b121d",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 5,
  },
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
    width: "80%",
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
    fontSize: 14,
    marginTop: 0,
    fontWeight: 400,

    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 12,
    color: "#000",
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
