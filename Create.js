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
const Create = () => {
  const [selectedValue, setSelectedValue] = useState("India");

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: "https://i.ibb.co/WHhxsfG/a-1.jpg" }}
        />
      </View>
      <View style={styles.headText}>Abstract UI</View>
      <View style={styles.subText}>
        Please confirm Your Country Code and enter Your Phone number
      </View>
      <View style={styles.label}>Select Country </View>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="India" value="java" />
        <Picker.Item label="Australia" value="js" />
      </Picker>
      <View style={styles.label}>Phone Number </View>
      <TextInput
        onFocus={styles.inputFocus}
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="numeric"
      />
      <View style={styles.labelText}>
        When you update your Phone Number ,a 4 digit OTP will be send via SMS to
        verify it .
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          Create Account
        </TouchableOpacity>
      </View>
      <View style={styles.agreeText}>
        By clicking Sign up you agree to the following Terms And Conditions
        without Reservation
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  tinyLogo: {
    width: "100%",
    height: "100%",
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
    color: "#0b121d",
    fontSize: 10,
    marginTop: 5,
    textAlign: "left",
    width: "90%",
  },
  label: {
    color: "#0b121d",
    fontSize: 12,
    marginTop: 20,
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
    justifyContent: "center",
    padding: 0,
    alignItems: "center",
  },
  image: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 80,
    backgroundColor: "#ccecec",
    marginTop: 50,
    borderRadius: "50%",
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
    fontSize: 13,
    color: "#0b121d",

    marginTop: 0,
    fontWeight: 400,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 20,
    marginBottom: 10,
  },
  agreeText: {
    height: 30,
    fontSize: 10,
    marginTop: 0,

    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 35,
    marginBottom: 10,
    color: "#0b121d",
  },
});
