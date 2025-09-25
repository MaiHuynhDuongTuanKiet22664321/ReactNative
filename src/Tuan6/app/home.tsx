import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "./productCard";

const home = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [productsCategory, setProductsCategory] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [tabName, setTabName] = useState("All");

   const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://68ca4e99430c4476c348fa2f.mockapi.io/product/product"
        );
        const data = await response.json();
        setProductsCategory(data);
        setProducts(data);
      } catch (error) {
        console.error("Lỗi khi load sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(()=>{
    if(tabName === "All"){
      setProductsCategory(products);
      return;
    }
    const filteredProducts = products.filter(product => product.category === tabName);
    setProductsCategory(filteredProducts);
  },[tabName])

  console.log(products);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ marginVertical: 30 }}>
          <Text style={styles.textHeader}>The world’s Best Bike</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.Btn} onPress={() => setTabName("All")}>
            <Text style={[styles.textBtn,tabName === "All" && {color:'red'}]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn} onPress={() => setTabName("Roadbike")}>
            <Text style={[styles.textBtn,tabName === "Roadbike" && {color:'red'}]}>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Btn} onPress={() => setTabName("Mountain")}>
            <Text style={[styles.textBtn,tabName === "Mountain" && {color:'red'}]}>Mountain</Text>
          </TouchableOpacity>
        </View>
       <View style={{flex:1}}>
         <FlatList
          data={productsCategory}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          numColumns={2}
          renderItem={({ item }) => {
            return <ProductCard product={item} />;
          }}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
       </View>
      </View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textHeader: {
    fontFamily: "Bold",
    fontSize: 25,
    fontWeight: 700,
    color: "#E94141",
  },
  textBtn: {
    fontFamily: "Regular",
    fontSize: 20,
    fontWeight: 400,
    color: "#BEB6B6",
  },
  Btn: {
    width: 99,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E94141",
  },
  list: {
    gap: 10,
    marginTop: 20,
  },
});
