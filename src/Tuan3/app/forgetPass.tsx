import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import Lock from "../assets/images/Vector.png";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import  {useRoute}  from "expo-router";


export default function ForgetPassScreen() {
  const router = useRoute();
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <LinearGradient
        colors={["#CAF4F6", "#92b3fbff"]}
        locations={[0, 0.8]}
        start={[0, 0]}
        end={[0, 1]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Image source={Lock} style={styles.logoIndex} />
          <Text style={styles.text}>
            FORGET <br />
            PASSWORD
          </Text>
          <Text style={styles.text1}>
            Provide your account is email for which you want to reset your
            password
          </Text>
          <View style={styles.containerInput}>
            <Ionicons name="mail" size={20} color={"black"} />
            <TextInput placeholder="Email"/>
          </View>
          <View style={styles.containerButton}>
            <Pressable style={styles.button}>
              <Text style={styles.textButton} onPress={()=> {router.push('/verification')}}>Next</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  logoIndex: {},
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 40,
    width: 200,
    height: 58,
    textAlign: "center",
  },
  text1: {
    fontSize: 15,
    marginTop: 40,
    width: 302,
    height: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerButton: {
    flexDirection: "row",
    marginTop: 40,
    gap: 20,
    justifyContent: "space-between",
  },
  button: {
    width: 305,
    height: 45,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  textButton: {
    fontWeight: "bold",
  },
  containerInput: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 40,
    width: 305,
    height:45,
    borderWidth:1,
    padding:10
  },
});
