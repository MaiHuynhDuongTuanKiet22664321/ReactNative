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
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

export default function  LoginScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>
            LOGIN
          </Text>
          <View style={styles.containerInput}>
            <TextInput placeholder="Email" style={{flex:1}}/>
          </View>
          <View style={styles.containerInput1}>
            <TextInput placeholder="Password" style={{flex:1,alignItems:"flex-start"}}/>
             <Ionicons name="eye" size={20} color={"black"} />
          </View>
          <View style={styles.containerButton}>
            <Pressable style={styles.button}>
              <Text style={styles.textButton} onPress={()=> {router.push('/')}}>Next</Text>
            </Pressable>
          </View>
        </View>
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
  containerInput1:{
    flexDirection: "row",
    gap: 10,
    marginTop: 40,
    width: 305,
    height:45,
    borderWidth:1,
    padding:10
  }
});
