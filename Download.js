import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { auth, db } from "./firebase";

const Download = ({ navigation }) => {
  const user = auth.currentUser;
  const [data, setdata] = useState([]);
  const [userdata, setuserdata] = useState([]);

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
    const userref = db.collection("users");
    userref.onSnapshot((query) => {
      const objs = [];
      query.forEach((doc) => {
        objs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setuserdata(objs);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.back}></View>
        <View style={styles.heading}>Hi ! {user?.displayName} </View>
        <View style={styles.details}>
          <TouchableOpacity
            onPress={() => {
              db.collection("data")
                .doc(user?.uid)
                .delete()
                .then(() => {
                  console.log("Document successfully deleted!");
                })
                .catch((error) => {
                  console.error("Error writing document: ", error);
                });
              db.collection("users")
                .doc(user?.uid)
                .delete()
                .then(() => {
                  console.log("Document successfully deleted!");
                })
                .catch((error) => {
                  console.error("Error writing document: ", error);
                });
              user.updateProfile({
                photoURL: "",
                displayName: "",
              });
              auth.signOut();
            }}
            style={styles.socialButton}
          >
            Delete my Data
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              auth.signOut();
            }}
            style={styles.socialButton}
          >
            Log out
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Created");
            }}
            style={styles.socialButton}
          >
            Home{" "}
          </TouchableOpacity>
        </View>
        <View style={styles.heading}>
          <TouchableOpacity style={styles.optionButton}>
            {data[0]?.branch?.length !== 0 ? data[0]?.branch : "No Branch"}
          </TouchableOpacity>
        </View>
        {/* <View style={styles.line}></View> */}
        <View style={styles.navigator}>
          <View
            style={styles.navigatorOptions}
            style={styles.navigatorOptionsSelected}
          >
            Available Users
          </View>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.liveNo}>
          <Text style={styles.colorLight}>{userdata?.length} Users</Text>
        </View>
        {userdata.map((item) => (
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.itemCalender}>
                <Text style={styles.itemCalenderMonth}>
                  {item?.time?.split(" ")[0]}
                </Text>
                <View style={styles.itemCalenderLine}></View>
                <Text>{item?.time?.split(" ")[2]}</Text>
              </View>
            </View>
            <View style={styles.itemRight}>
              <View style={styles.itemHead}>{item?.name}</View>
              <View style={styles.itemDetails}>
                <View style={styles.live}>Live</View>
                <Text style={styles.colorLight}>{item?.phone}</Text>
              </View>
              <View style={styles.itemTime}>
                <Text style={styles.colorLight}>Joined at</Text>
              </View>
              <View style={styles.itemDetails}>
                <Text style={styles.timeSlots}>
                  {item?.time?.split(" ")[1]}
                </Text>
                <Text style={styles.timeSlots}>
                  {item?.time?.split(" ")[3]}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Download;

const styles = StyleSheet.create({
  timeSlots: {
    backgroundColor: "#eeeeee",
    borderRadius: 5,
    display: "flex",
    padding: 5,
    marginTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
    textTransform: "uppercase",
    fontSize: 12,
    height: 20,
    marginRight: 10,
    color: "#818181",
    justifyContent: "center",
  },
  live: {
    backgroundColor: "green",
    borderRadius: 5,
    display: "flex",
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 12,
    height: 20,
    marginRight: 10,
    color: "#fff",
    justifyContent: "center",
  },
  itemTime: {
    color: "#000",
    fontWeight: 700,
    height: 20,
    width: "100%",
    padding: 5,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  itemDetails: {
    color: "#000",
    fontWeight: 700,
    height: 20,
    width: "100%",
    padding: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  itemHead: {
    color: "#000",
    fontWeight: 700,
    height: 30,
    width: "100%",
    padding: 5,
    display: "flex",
    marginTop: 10,

    justifyContent: "center",
  },
  itemRight: {
    width: "70%",
    textAlign: "left",
    height: "100%",
    display: "flex",

    alignItems: "center",
    flexDirection: "column",
  },
  itemCalenderMonth: {
    fontWeight: 600,
    color: "#2c1b55",
  },
  itemCalender: {
    width: 50,
    textTransform: "uppercase",
    height: 60,
    display: "flex",
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "center",
    padding: 5,
    justifyContent: "space-between",
    borderColor: "#a7a7a7",
    borderWidth: 1,
    marginTop: 10,
  },
  itemLeft: {
    width: "30%",
    opacity: 0.9,

    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  item: {
    width: "100%",
    height: 135,
    display: "flex",
    marginTop: 5,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  colorLight: { color: "#8b8b8b", fontWeight: 600 },
  liveNo: {
    width: "100%",
    paddingLeft: 20,
    height: 40,
    color: "#a7a7a7",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  bodyContainer: {
    width: "100%",
    height: "50%",
    overflow: "scroll",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  socialButton: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderWidth: 1,
    height: 38,
    borderRadius: 5,
    display: "flex",
    color: "#000",
    marginRight: 10,
    padding: 10,
    fontSize: 15,
    fontWeight: 600,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  navigatorOptionsSelected: {
    borderBottomColor: "yellow",
    color: "#979797",
    fontWeight: 600,
    height: "100%",
    borderBottomWidth: 2,
    display: "flex",
    fontSize: 12,
    width: "33.3%",
    justifyContent: "center",
    alignItems: "center",
  },
  navigatorOptions: {
    color: "#979797",
    fontWeight: 600,
    height: "100%",
    borderBottomWidth: 2,
    display: "flex",
    fontSize: 12,
    width: "33.3%",
    justifyContent: "center",
    alignItems: "center",
  },
  navigator: {
    display: "flex",
    justifyContent: "space-evenly",
    height: 48,
    alignItems: "center",
    flexDirection: "row",
  },
  itemCalenderLine: {
    width: "60%",
    backgroundColor: "#a7a7a7",
    height: 1,
  },
  line: {
    width: "100%",
    backgroundColor: "#535353",
    height: 1,
    opacity: 0.5,

    marginTop: 15,
  },
  optionButton: {
    width: 120,
    backgroundColor: "#7e7e7e",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    height: 35,
    alignItems: "center",
    flexDirection: "row",
    opacity: 0.5,
    fontSize: 15,
  },
  textDetailsHead: {
    color: "#c4c4c4",
    fontSize: 10,
  },
  textDetailsMain: {
    color: "#fff",
    marginTop: 5,
    fontSize: 22,
  },
  textDetails: {
    width: 70,
    height: "100%",
    marginRight: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
  },
  details: {
    width: "100%",
    height: 60,
    display: "flex",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  heading: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: 20,
    fontWeight: 600,
    color: "#fff",
    height: 30,
  },
  back: {
    width: "100%",
    height: 65,
  },
  container: {
    width: "95%",
    height: "99%",
    backgroundColor: "#eeeeee",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    borderTopStartRadius: 30,
    overflow: "hidden",
    borderTopEndRadius: 30,
  },
  headerContainer: {
    backgroundColor: "#2c1b55",
    width: "100%",
    padding: 12,
    height: "50%",
  },
});
