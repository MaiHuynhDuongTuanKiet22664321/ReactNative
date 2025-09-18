import {
  Image,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { imageMap } from "./imageMap";
import star from "@/assets/images/star.png";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function HomeScreen() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const { data: dataParams } = useLocalSearchParams<{ data?: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://68ca4e99430c4476c348fa2f.mockapi.io/product/product/black"
        );
        const d = await res.json();
        setData(d);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    // chỉ fetch nếu không có param
    if (!dataParams) {
      fetchData();
    }
  }, [dataParams]);

  useEffect(() => {
    if (dataParams) {
      try {
        const parsed = JSON.parse(dataParams);
        setData(parsed);
        setLoading(false);
      } catch (e) {
        console.log("Invalid JSON:", e);
      }
    }
  }, [dataParams]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : data ? (
            <Image source={imageMap[data.image]} style={styles.imageStyle} />
          ) : (
            <Text>No data</Text>
          )}
        </View>
        <View style={styles.inforContainer}>
          <Text style={styles.deseptionText}>{data.deseption}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Image source={star} key={i} style={{ width: 25, height: 25 }} />
            ))}
            <View
              style={{ fontSize: 15, fontFamily: "Roboto", marginLeft: 30 }}
            >
              <Text>(Xem 8000 đánh giá)</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              {data.price_sale}
            </Text>
            <Text
              style={{
                fontSize: 16,
                textDecorationLine: "line-through",
                marginLeft: 60,
              }}
            >
              {data.price_root}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 12,
                fontWeight: "700",
              }}
            >
              Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                borderWidth: 2,
                width: 20,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 20,
              }}
            >
              <Text style={{ alignSelf: "center" }}>?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              width: "100%",
              height: 40,
            }}
            onPress={() =>
              router.push({
                pathname: "/selectColor",
                params: { data: JSON.stringify(data) },
              })
            }
          >
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              4 MÀU - CHỌN MÀU
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              width: "100%",
              height: 40,
              backgroundColor: "red",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "white",
              }}
            >
              {"CHỌN MUA"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  inforContainer: {
    flex: 3,
    marginTop: 15,
  },
  btnContainer: {
    flex: 1,
  },
  imageStyle: {
    width: 350,
    height: "100%",
  },
  deseptionText: {
    fontSize: 15,
    fontFamily: "Roboto",
  },
});
