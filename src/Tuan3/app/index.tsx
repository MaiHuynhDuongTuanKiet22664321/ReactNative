import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable
} from "react-native";
import Ellipse1circle from "../assets/images/Ellipse1circle.svg";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';

export default function HomeScreen({ navigation }: any) {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
       <LinearGradient
      colors={['#CAF4F6', '#92b3fbff']}
      locations={[0, 0.8]}             
      start={[0, 0]}                   
      end={[0, 1]}                     
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image source={Ellipse1circle} style={styles.logoIndex} />
        <Text style={styles.text}>
          GROW {"\n"} YOUR BUSINESS
        </Text>
        <Text style={styles.text1}>We will help you to grow your business using online server</Text>
        <View style={styles.containerButton}>
          <Pressable style={styles.button} onPress={()=> { router.push('/login')}}><Text style={styles.textButton} >LOGIN</Text></Pressable>
          <Pressable style={styles.button}><Text style={styles.textButton}>SIGN UP</Text></Pressable>
        </View>
        <Text style={styles.text2}>HOW WE WORK?</Text>
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
    marginTop: 70
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
  text1:{
    fontSize:15,
    marginTop: 40,
    width:302,
    height:36,
    fontWeight: "bold",
    textAlign: "center",
  },
  text2:{
    fontSize:18,
    fontWeight:'bold',
    marginTop: 30
  },
  containerButton:{
    flexDirection:'row',
    marginTop:60,
    gap:20,
    justifyContent:'space-between'
  },
  button:{
    width:125,
    height:45,
    backgroundColor:'yellow',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1
  },
  textButton:{
    fontWeight:'bold'
  }
});
