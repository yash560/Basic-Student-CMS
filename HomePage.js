import React from "react";
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
} from "react-native";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap');
</style>;

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://ik.imagekit.io/Yash/student-1-2-ppqe2i6mcnh5q04ladfeid_s7Rvsa2NbsF.png",
          }}
        />
      </View>
      <View style={styles.headText}>Student Management System</View>
      <View style={styles.subText}>Welcome To Login And Signup</View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.buttonLogin}
        >
          Login
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Signup");
          }}
          style={styles.button}
        >
          Signup
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "transparent",
    height: 40,
    width: "100%",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 0,
  },
  buttonLogin: {
    backgroundColor: "#fff",
    height: 40,
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    display: "flex",
    borderColor: "#c2c2c2",
    color: "#0b121d",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#006afe",
    height: 40,
    width: 100,

    borderRadius: 5,
    display: "flex",
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
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
  tinyLogo: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: 40,
    height: 200,
    backgroundColor: "#f0f0f0",
    marginTop: 30,
    borderRadius: "50%",
  },
  headText: {
    height: 70,
    marginLeft: "auto",
    marginBottom: 20,
    marginTop: 20,
    marginRight: "auto",
    textAlign: "center",
    borderRadius: 10,
    color: "#0b121d",
    padding: 10,
    fontSize: 25,
    color: "#1d1d1d",
  },
  subText: {
    height: 30,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    marginBottom: 30,
    color: "#747474",
  },
});
