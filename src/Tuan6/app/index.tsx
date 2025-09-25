import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import bcy1 from "../assets/images/bcy1.png";
import { useRouter } from "expo-router";

const screen_01 = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textHeader}>
          A premium online store for sporter and their stylish choice
        </Text>
      </View>
      <View
        style={{
          width: 359,
          height: 388,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          backgroundColor: "#E941411A",
        }}
      >
        <Image source={bcy1} />
      </View>
      <View>
        <Text style={styles.textFooter}>POWER BIKE {"\n"}SHOP</Text>
      </View>
      <TouchableOpacity style={{width:340,height:61,borderRadius:30,borderWidth:1, alignContent:"center",justifyContent:"center",backgroundColor:'#E94141'}} onPress={()=>{router.push("/home")}}>
        <Text style={styles.textBtn}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default screen_01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontFamily: "Regular",
    fontSize: 26,
    fontWeight: 400,
    color: "#000",
    textAlign: "center",
    padding: 30,
  },
  textFooter:{
    fontFamily: "Bold",
    fontSize: 26,
    fontWeight: 700,
    color: "#000",
    textAlign: "center",
    padding: 30,
  },
  textBtn: {
    fontFamily: "Bold",
    fontSize: 27,
    fontWeight: 700,
    color: "#fff",
    textAlign: "center",
  },
});
