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
import { auth, db } from "./firebase";

const Other = ({ navigation }) => {
  const [branch, setbranch] = useState("");
  const [gen, setgen] = useState("");
  const user = auth.currentUser;
  const [data, setdata] = useState([]);
  useEffect(() => {
    const ref = db.collection("data");
    ref.onSnapshot((query) => {
      const objs = [];
      query.forEach((doc) => {
        objs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setdata(objs);
    });
  }, []);
  useEffect(() => {
    if (data?.length !== 0) {
      setbranch(data[0]?.branch);
      setgen(data[0]?.gen);
    }
  }, [data]);
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={{ uri: "https://ik.imagekit.io/Yash/doument_DSdiXvoBR.png" }}
        />
      </View>
      <View style={styles.headText}>Mention Other Details</View>
      <View style={styles.label}>Branch </View>
      <TextInput
        onChangeText={(text) => {
          setbranch(text);
        }}
        value={branch}
        style={styles.input}
        placeholder={
          data?.length !== 0 ? data[0]?.branch : "CS, Mechanical,etc"
        }
        keyboardType="numeric"
      />
      <View style={styles.label}>Gender </View>
      <TextInput
        onChangeText={(text) => {
          setgen(text);
        }}
        value={gen}
        style={styles.input}
        placeholder={data?.length !== 0 ? data[0]?.gen : "Male, Female, etc"}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            data?.length !== 0
              ? db
                  .collection("data")
                  .doc(user?.uid)
                  .update({
                    gen: gen,
                    branch: branch,
                  })
                  .then(() => {
                    console.log("Document successfully written!");
                  })
                  .catch((error) => {
                    console.error("Error writing document: ", error);
                  })
              : db
                  .collection("data")
                  .doc(user?.uid)
                  .set({
                    gen: gen,
                    branch: branch,
                  })
                  .then(() => {
                    console.log("Document successfully written!");
                  })
                  .catch((error) => {
                    console.error("Error writing document: ", error);
                  });

            console.log(data);
          }}
          style={styles.button}
        >
          Submit
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          auth.signOut();
        }}
        style={styles.createText}
      >
        Logout
      </TouchableOpacity>
      <View style={styles.socialButtonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
          style={styles.socialButton}
        >
          <View style={styles.socialButtonText}>View All Students</View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Other;

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
  tinyLogo: {
    width: 20,
    height: 20,
  },
  socialButtonContainer: {
    height: 20,
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
    height: 50,
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
