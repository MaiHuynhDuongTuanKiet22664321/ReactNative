import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import logo from "../assets/images/logo.png"


export default function  LoginScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>LOGIN</Text>
        <View style={styles.containerInput}>
          <Ionicons name="person" size={20} color={"black"} />
          <TextInput placeholder="Email" style={{ flex: 1 }} />
        </View>
        <View style={styles.containerInput1}>
          <Ionicons name="lock-closed" size={20} color={"black"} />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, alignItems: "flex-start" }}
          />
          <Ionicons name="eye" size={20} color={"black"} />
        </View>
        <View style={styles.containerButton}>
          <Pressable style={styles.button}>
            <Text
              style={styles.textButton}
              onPress={() => {
                router.push("/");
              }}
            >
              LOGIN
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.text1}>CREATE ACCOUNT</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#f6c701",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  text: {
    fontFamily: "bold",
    fontSize: 30,
    width: 302,
    height: 36,
    textAlign: "left",
    marginBottom: 40,
  },
  text1: {
    fontSize: 20,
    fontFamily: "bold",
    fontWeight: 700,
    marginTop: 40,
    width: 302,
    height: 36,
    textAlign: "center",
  },
  containerButton: {
    flexDirection: "row",
    marginTop: 50,
    gap: 20,
    justifyContent: "space-between",
  },
  button: {
    width: 305,
    height: 45,
    backgroundColor: "#0e0d0dff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  button1: {
    marginTop: 30,
  },
  textButton: {
    fontWeight: "bold",
    color: "#fff"
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 40,
    width: 305,
    height: 45,
    borderWidth: 1,
    padding: 10,
  },
  containerInput1: {
    flexDirection: "row",
    gap: 10,
    marginTop: 40,
    width: 305,
    height: 45,
    borderWidth: 1,
    padding: 10,
  },
  text2: {
    color: "#5D25FA",
  },
});
