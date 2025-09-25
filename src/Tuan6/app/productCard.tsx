import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { imageMap } from "./map_Img";

const ProductCard = ({ product }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.favoriteBtn}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <EvilIcons
            name="heart"
            size={28}
            color={isFavorite ? "red" : "black"}
          />
        </TouchableOpacity>

        <Image
          source={imageMap[product?.image]}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.infoBox}>
          <Text style={styles.name}>{product?.name}</Text>
          <Text style={styles.price}>$ <Text style={[styles.price],{color:'#000'}}>{product?.price}</Text></Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  card: {
    backgroundColor: "#F7BA8326",
    borderRadius: 16,
    padding: 12,
    width: 160,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4, // Android shadow
  },
  favoriteBtn: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  image: {
    width: 120,
    height: 110,
    marginVertical: 10,
  },
  infoBox: {
    alignItems: "center",
    marginTop: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#E67E22",
    textAlign: "center",
  },
});
