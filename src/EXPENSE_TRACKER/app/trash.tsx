import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
  RefreshControl,
} from "react-native";
import { useFocusEffect } from "expo-router";
import { openDatabaseSync } from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";

const db = openDatabaseSync("expenses.db");

export default function TrashScreen() {
  const [trash, setTrash] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadTrash = useCallback(async () => {
    let query = "SELECT * FROM expenses WHERE deleted = 1";
    if (search.trim()) query += ` AND title LIKE '%${search.trim()}%'`;
    query += " ORDER BY id DESC;";
    const result = await db.getAllAsync(query);
    setTrash(result);
  }, [search]);

  useFocusEffect(
    useCallback(() => {
      loadTrash();
    }, [loadTrash])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTrash();
    setRefreshing(false);
  };

  async function restoreItem(id: number) {
    await db.runAsync("UPDATE expenses SET deleted = 0 WHERE id = ?;", [id]);
    loadTrash();
  }

  async function deleteForever(id: number) {
    Alert.alert("Xóa vĩnh viễn?", "Hành động này không thể hoàn tác!", [
      { text: "Hủy", style: "cancel" },
      {
        text: "Xóa luôn",
        style: "destructive",
        onPress: async () => {
          await db.runAsync("DELETE FROM expenses WHERE id = ?;", [id]);
          loadTrash();
        },
      },
    ]);
  }

  function handleLongPress(id: number) {
    Alert.alert("Tùy chọn", "Bạn muốn làm gì với mục này?", [
      { text: "Khôi phục", onPress: () => restoreItem(id) },
      { text: "Xóa vĩnh viễn", style: "destructive", onPress: () => deleteForever(id) },
      { text: "Hủy", style: "cancel" },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Ô tìm kiếm */}
      <TextInput
        placeholder="🔍 Tìm trong thùng rác..."
        style={styles.search}
        value={search}
        onChangeText={setSearch}
      />

      {/* Danh sách thùng rác */}
      <FlatList
        data={trash}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, { borderLeftColor: item.type === "Thu" ? "green" : "red" }]}
            onLongPress={() => handleLongPress(item.id)}
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
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20, color: "gray" }}>
            Không có dữ liệu trong thùng rác.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  search: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 8, marginBottom: 10 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderLeftWidth: 6,
    backgroundColor: "#f0f0f0",
    marginVertical: 8,
    borderRadius: 8,
  },
  title: { fontSize: 16, fontWeight: "600" },
  date: { fontSize: 12, color: "gray" },
  amount: { fontSize: 16, fontWeight: "700" },
});
