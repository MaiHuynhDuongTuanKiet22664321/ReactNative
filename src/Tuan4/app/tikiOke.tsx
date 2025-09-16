import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import book from "../assets/images/book.png";

const tikiOke = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={{ flex: 3 , backgroundColor: "white" }}>
        <View style={{ flex: 6, flexDirection: "row", height: 200 , padding: 10}}>
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
                padding: 10,
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
        </View >
        <View style={{ flex: 2 , padding: 10}}>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold" }}>Mã giảm giá đã lưu</Text>
            <Text
              style={{ fontWeight: "bold", color: "#1531e6ff", marginLeft: 20 }}
            >
              Xem tại đây
            </Text>
          </View>
        </View>
        <View style={{ flex: 2 , flexDirection: "row", alignItems: "center", justifyContent: "space-between" , padding: 10}}>
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
        <View style={{ flex: 1 , backgroundColor: "white" , marginVertical: 20 ,padding: 12, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
             <Text style={{ fontWeight: "bold"}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
            <Text style={{ fontWeight: "bold", color: "#1531e6ff"}}> Nhập tại đây</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "white" , flexDirection: "row",padding: 12, alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20}}>Tạm tính</Text>
            <Text style={{ fontWeight: "bold", color: "red", fontSize: 20}}> 141.800 đ</Text>
        </View>
        <View style={{ flex: 4, backgroundColor: "white", marginTop: 200, padding: 10}}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 , color: "#9b9b9bff"}}>Thành tiền</Text>
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 20}}> 141.800 đ</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: "#e61523ff", width: 400, height: 50,flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: 20}}><Text style={{ fontWeight: "bold", color: "white", fontSize: 20}}>TIẾN HÀNH ĐẶT HÀNG</Text></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default tikiOke;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "gray",
  },
});
