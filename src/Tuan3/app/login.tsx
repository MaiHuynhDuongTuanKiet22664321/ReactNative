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
              <Text style={styles.textButton} onPress={()=> {router.push('/')}}>LOGIN</Text>
            </Pressable>
          </View>
          <Text style={styles.text1}>When you agree to terms and conditions</Text>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={styles.text2}>For got your password?</Text>
          </TouchableOpacity>
          <View style={{marginTop:20}}>
            <Text>Or login with</Text>
          </View>
          <View style={styles.button1}>
            <TouchableOpacity onPress={()=>{}}>
              <Image source={logo} />
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "#d8efde",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
  },
  logoIndex: {},
  text: {
    fontFamily:"bold",
    fontSize: 30,
    width: 302,
    height: 36,
    textAlign: "center",
  },
  text1: {
    fontSize: 15,
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
    backgroundColor: "#c34e3b",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  button1:{
    marginTop: 30
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
  },
  text2:{
    color:"#5D25FA"
  }
});
