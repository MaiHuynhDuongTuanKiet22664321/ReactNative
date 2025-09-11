import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import book from "../assets/images/book.png";

const tikiOke = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={{ flex: 3 }}>
        <View style={{ flex: 6, flexDirection: "row", height: 200 }}>
          <View style={{ flex: 3 }}>
            <Image source={book} />
          </View>
          <View style={{ flex: 7 }}>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold", paddingTop: 10 }}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                paddingTop: 10,
                color: "red",
              }}
            >
              141.800 đ
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "gray",
                paddingTop: 10,
                textDecorationLine: "line-through",
              }}
            >
              141.800 đ
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "gray",
                    width: 20,
                    height: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>-</Text>
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", paddingHorizontal: 15 }}>
                  1
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "gray",
                    width: 20,
                    height: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>+</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ color: "#1531e6ff", fontWeight: "bold" }}>
                  Mua sau
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>Mã giảm giá đã lưu</Text>
            <Text
              style={{ fontWeight: "bold", color: "#1531e6ff", marginLeft: 20 }}
            >
              Xem tại đây
            </Text>
          </View>
        </View>
        <View style={{ flex: 2 , flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
          <View
            style={{
              borderWidth: 1,
              borderColor: "gray",
              padding: 10,
              width: 208,
              height: 45,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                style={{ backgroundColor: "#f0db3dff", width: 40, height: 20 }}
              ></TouchableOpacity>
              <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
                Mã giảm giá
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{ backgroundColor: "#1919dfff", padding: 10 , width: 99, height: 45, flexDirection: "row", alignItems: "center", justifyContent: "center" }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Áp dụng
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 1 }}></View>
        <View style={{ flex: 4 }}></View>
        <View style={{ flex: 4 }}></View>
      </View>
    </SafeAreaView>
  );
};

export default tikiOke;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
