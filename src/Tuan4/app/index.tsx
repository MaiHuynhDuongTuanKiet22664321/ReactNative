import React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.scrollAreaViewContainer}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        style={styles.linearGradient}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>LOGIN</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputText}>
            <Feather name="user" size={24} color="black" />
            <TextInput placeholder={"Name"} style={{ width: "100%", height:40 }} />
          </View>
          <View style={styles.inputText}>
            <Entypo name="lock" size={24} color="black" />
            <TextInput placeholder={"Password"} style={{ width: "100%" , height:40 }} />
            <Entypo name="eye" size={24} color="black" />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {router.push('/evaluate')}}>
            <Text style={styles.textButton}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textBottomContainer}>
          <Text style={styles.textBottom}>Forgot your password?</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  scrollAreaViewContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    padding: 10,
  },
  logoContainer: {
    marginTop: 60,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  inputText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    width: '100%',
    height: 54,
    borderWidth: 1,
    borderColor:"white",
    padding: 10,
    backgroundColor: "#DEBE3B",
  },
  buttonContainer: {
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor:'#131212ff'
  },
  button:{
    height: 45,
    borderRadius:2,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
  },
  textBottomContainer:{
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
  },
  textBottom: {
    fontSize: 20,
    marginTop: 40,
    width: 302,
    height: 36,
    fontWeight: "bold",
    textAlign: "center",
  },

});
