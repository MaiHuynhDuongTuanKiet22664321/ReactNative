/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { imageMap } from "./imageMap";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

const SelectColor = () => {
  const [color, setColor] = useState("");
  const [dataColor, setDataColor] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { data } = useLocalSearchParams<{ data: string }>();

  useEffect(() => {
    if (data) {
      try {
        const parsed = JSON.parse(data);
        setDataColor(parsed);
      } catch (e) {
        console.log("Invalid JSON:", e);
      }
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      if (!color) return;
      try {
        setLoading(true);
        const res = await fetch(
          `https://68ca4e99430c4476c348fa2f.mockapi.io/product/product/${color}`
        );
        const d = await res.json();
        setDataColor(d);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [color]);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <View style={{ flex: 2, padding: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={imageMap[dataColor?.image]}
            style={styles.imageStyle}
          />
          <View style={{ paddingLeft: 10 }}>
            <Text style={styles.textNormal}>{dataColor?.deseption}</Text>
            <Text style={styles.textNormal}>
              Màu : <Text style={styles.textBold}>{dataColor?.color}</Text>
            </Text>
            <Text style={styles.textNormal}>
              Cung cấp bởi : <Text style={styles.textBold}>Tiki Tradding</Text>
            </Text>
            <Text style={styles.textNormal}>Giá : {dataColor?.price_sale}</Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 7, backgroundColor: "#c4c4c4" }}>
        <Text style={styles.title}>Chọn một màu bên dưới :</Text>
        <View style={styles.colorContainer}>
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: "#C5F1FB" }]}
            onPress={() => setColor("silver")}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: "#F30D0D" }]}
            onPress={() => setColor("red")}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: "#141313" }]}
            onPress={() => setColor("black")}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: "#234896" }]}
            onPress={() => setColor("blue")}
          />
        </View>
        <TouchableOpacity
          style={{
            width: "95%",
            height: 40,
            backgroundColor: "#1952E294",
            borderRadius: 10,
            justifyContent: "center",
            alignSelf: "center",
            marginTop: 40,
          }}
          onPress={() =>
            router.push({
              pathname: "/" ,
              params: { data: JSON.stringify(dataColor) },
            })
          }
        >
          <Text
            style={{
              fontFamily: "roboto",
              fontSize: 20,
              fontWeight: "700",
              alignSelf: "center",
            }}
          >
            Xong
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectColor;

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  imageStyle: {
    padding: 5,
    width: 105,
    height: 132,
  },
  colorButton: {
    width: 85,
    height: 80,
    margin: 10,
  },
  textNormal: {
    fontSize: 15,
    fontWeight: "400",
    paddingBottom: 5,
  },
  textBold: {
    fontSize: 15,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  colorContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
