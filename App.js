import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import HomePage from "./HomePage";
import Create from "./Create";
import Login from "./Login";
import Phone from "./Phone";
import Email from "./Email";
import Created from "./Created";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Download from "./Download";
import CreateAcount from "./CreateAcount";
import { auth } from "./firebase";
import Other from "./Other";
const Stack = createStackNavigator();

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  auth.onAuthStateChanged((user) => {
    if (user) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  });
  return (
    <NavigationContainer>
      {signedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Created" component={Created} />
          <Stack.Screen name="Email" component={Email} />
          <Stack.Screen name="Phone" component={Phone} />
          <Stack.Screen name="Other" component={Other} />
          <Stack.Screen name="Dashboard" component={Download} />
        </Stack.Navigator>
      ) : (
        <>
          <StatusBar style="light" />
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Signup" component={CreateAcount} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Inter",
    backgroundColor: "#fff",
  },
  formContainer: {
    backgroundColor: "#fff",
    overflow: "scroll",
    height: "100%",
    width: "100%",
  },

  title: {
    color: "#FFF",
    marginTop: 120,
    width: 180,
    textAlign: "center",
    opacity: 0.9,
  },
});
