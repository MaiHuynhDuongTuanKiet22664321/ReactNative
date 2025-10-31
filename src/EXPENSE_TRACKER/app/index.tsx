import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput, RefreshControl } from "react-native";
import { useRouter, useFocusEffect } from "expo-router";
import { openDatabaseSync } from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";

// ⭐️ IMPORT LẠI HÀM ĐỒNG BỘ ⭐️
import { syncData } from "./SyncService"; // Đảm bảo đường dẫn này đúng

const db = openDatabaseSync("expenses.db");

export default function HomeScreen() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Tất cả");
  const [refreshing, setRefreshing] = useState(false);
  // KHÔNG CẦN STATE syncUrl NỮA

  const loadData = useCallback(async () => {
    let query = "SELECT * FROM expenses WHERE deleted = 0";
    if (filter === "Thu") query += " AND type = 'Thu'";
    if (filter === "Chi") query += " AND type = 'Chi'";
    if (search.trim()) query += ` AND title LIKE '%${search.trim()}%'`;
    query += " ORDER BY id DESC;";
    const result = await db.getAllAsync(query);
    setItems(result);
  }, [search, filter]);

  useEffect(() => {
    db.execAsync(`
      CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        amount REAL,
        createdAt TEXT DEFAULT (datetime('now', 'localtime')),
        type TEXT,
        deleted INTEGER DEFAULT 0
      );
    `);
    loadData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [loadData])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  async function handleDelete(id) {
    await db.runAsync("UPDATE expenses SET deleted = 1 WHERE id = ?;", [id]);
    loadData();
  }

  return (
    <SafeAreaView style={styles.container}>
      
      {/* ⭐️ NÚT ĐỒNG BỘ ⭐️ */}
      <TouchableOpacity 
          style={styles.syncButton} 
          onPress={syncData} // Gọi hàm syncData không cần tham số
      >
        <Text style={styles.syncText}>☁️ Đồng Bộ</Text>
      </TouchableOpacity>

      {/* Thanh tìm kiếm */}
      <TextInput
        placeholder="🔍 Tìm kiếm..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      {/* Thanh lọc loại Thu/Chi */}
      <View style={styles.filterBar}>
        {["Tất cả", "Thu", "Chi"].map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.filterBtn, filter === t && styles.activeFilter]}
            onPress={() => setFilter(t)}
          >
            <Text style={styles.filterText}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Danh sách */}
      <FlatList
        data={items}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, { borderLeftColor: item.type === "Thu" ? "green" : "red" }]}
            onPress={() =>
              router.push({
                pathname: "/edit",
                params: { id: item.id, title: item.title, amount: item.amount, type: item.type },
              })
            }
            onLongPress={() => handleDelete(item.id)}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.createdAt}</Text>
            </View>
            <Text style={[styles.amount, { color: item.type === "Thu" ? "green" : "red" }]}>
              {item.amount} đ
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Nút điều hướng */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/add")}>
        <Text style={styles.addText}>➕ Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.trashButton} onPress={() => router.push("/trash")}>
        <Text style={styles.trashText}>🗑️ Trash</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chartButton} onPress={() => router.push("/statistics")}>
        <Text style={styles.chartText}>📊 Stats</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  
  // ⭐️ STYLES MỚI CHO SYNC ⭐️
  syncButton: { 
    backgroundColor: "#007bff", 
    padding: 12, 
    borderRadius: 10, 
    alignItems: "center", 
    marginBottom: 10 // Thêm khoảng cách dưới
  },
  syncText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "600" 
  },
  
  search: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, marginBottom: 10 },
  filterBar: { flexDirection: "row", justifyContent: "space-around", marginBottom: 10 },
  filterBtn: { padding: 8, borderWidth: 1, borderRadius: 8 },
  activeFilter: { backgroundColor: "#007bff" },
  filterText: { color: "#000" },
  item: { flexDirection: "row", alignItems: "center", padding: 16, borderLeftWidth: 6, backgroundColor: "#f9f9f9", marginVertical: 8, borderRadius: 8 },
  title: { fontSize: 16, fontWeight: "600" },
  date: { fontSize: 12, color: "gray" },
  amount: { fontSize: 16, fontWeight: "700" },
  addButton: { backgroundColor: "#007bff", padding: 12, borderRadius: 10, alignItems: "center", marginTop: 10 },
  addText: { color: "#fff", fontSize: 16 },
  trashButton: { backgroundColor: "#6c757d", padding: 10, borderRadius: 10, alignItems: "center", marginTop: 10 },
  trashText: { color: "#fff", fontSize: 16 },
  chartButton: { backgroundColor: "#28a745", padding: 10, borderRadius: 10, alignItems: "center", marginTop: 10 },
  chartText: { color: "#fff", fontSize: 16 },
});