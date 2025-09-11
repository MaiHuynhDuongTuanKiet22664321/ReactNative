/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import usb from "../assets/images/usb.png";
import camera from "../assets/images/camera.png";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const evaluate = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.headerContainer}>
        <Image source={usb} style={{ width: 80, height: 80 }} />
        <Text style={styles.textHeader}>
          Bluetooth Music USB Receiver{"\n"}HJX-001- Biến loa thường thành loa
          {"\n"}
          bluetooth
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 60 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Cực kì hài lòng
        </Text>
      </View>
      <View style={styles.starContainer}>
        {[...Array(5)].map((_, index) => (
          <TouchableOpacity key={index} style={{ padding: 10 }}>
            <EvilIcons name="star" size={40} color="black" />
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.cameraContainer}>
          <View
            style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
          >
            <Image
              source={camera}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Thêm hình ảnh
            </Text>
          </View>
        </View>
      </View>
        <View style={{ alignItems: "center" , marginTop: 20}}>
          <View style={styles.textAreaContainer}>
            <TextInput
              placeholder="Hãy chia sẽ những điều bạn thích về sản phẩm"
              placeholderTextColor={"#a2a2a2ff"}
              multiline={true}
              numberOfLines={8}
              style={{ padding: 10 , borderRadius: 5 , fontSize: 20 , }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center" , marginTop: 10}}>
          <TouchableOpacity style= {styles.button}>
            <Text style={styles.textButton}>
              Gửi
            </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default evaluate;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
  },
  textHeader: {
    fontSize: 17,
    fontWeight: "bold",
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#2354b6ff",
    width: "80%",
  },
  textAreaContainer:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#a2a2a2ff",
    width: "80%",
  },
  button:{
    backgroundColor: "#2354b6ff",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    alignSelf: "center"
  },
  textButton:{
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  }
});
