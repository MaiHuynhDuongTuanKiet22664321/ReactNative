import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import * as SQLite from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";

const db = SQLite.openDatabaseSync("expenses.db");

export default function AddExpense() {
  const router = useRouter();
  // ⭐️ Dùng useState để quản lý giá trị nhập liệu
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("Chi"); // Mặc định là Chi

  async function saveData() {
    // 1. Kiểm tra tính hợp lệ
    if (!title.trim() || !amount.trim()) {
      return Alert.alert("Lỗi", "Vui lòng nhập đầy đủ thông tin!");
    }

    const numericAmount = parseFloat(amount.trim());
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return Alert.alert("Lỗi", "Số tiền không hợp lệ!");
    }

    try {
      const createdAt = new Date().toLocaleDateString("vi-VN");
      
      // 2. Thực hiện INSERT vào DB
      await db.runAsync(
        "INSERT INTO expenses (title, amount, createdAt, type, deleted) VALUES (?, ?, ?, ?, 0);",
        [title.trim(), numericAmount, createdAt, type]
      );
      
      // 3. Làm sạch form sau khi lưu
      setTitle("");
      setAmount("");

      // 4. Điều hướng quay lại
      router.back();

    } catch (error) {
      console.error("Lỗi khi lưu dữ liệu:", error);
      Alert.alert("Lỗi DB", "Không thể lưu dữ liệu.");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Tên khoản chi:</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên..."
        value={title} // ⭐️ Gán giá trị từ state
        onChangeText={setTitle} // ⭐️ Cập nhật state khi thay đổi
      />

      <Text style={styles.label}>Số tiền:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nhập số tiền..."
        value={amount} // ⭐️ Gán giá trị từ state
        onChangeText={setAmount} // ⭐️ Cập nhật state khi thay đổi
      />

      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[styles.typeButton, type === "Thu" && styles.active]}
          onPress={() => setType("Thu")}
        >
          <Text style={[styles.typeText, type === "Thu" && styles.activeText]}>Thu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, type === "Chi" && styles.active]}
          onPress={() => setType("Chi")}
        >
          <Text style={[styles.typeText, type === "Chi" && styles.activeText]}>Chi</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={saveData}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  label: { fontSize: 16, fontWeight: "500", marginTop: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  typeButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc", // Thêm border color cho nút không active
    borderRadius: 8,
    width: 100,
    alignItems: "center",
  },
  active: {
    backgroundColor: "#007bff",
    borderColor: "#007bff", // Đồng bộ border khi active
  },
  typeText: { color: "#000" },
  activeText: { color: "#fff" }, // Màu chữ trắng khi active
  saveButton: {
    backgroundColor: "#28a745",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  saveText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});