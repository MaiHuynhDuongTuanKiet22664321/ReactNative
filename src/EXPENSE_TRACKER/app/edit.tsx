import React, { useRef, useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import * as SQLite from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";

const db = SQLite.openDatabaseSync("expenses.db");

export default function EditExpense() {
  const router = useRouter();
  const { id, title, amount, type } = useLocalSearchParams();

  const titleRef = useRef<TextInput>(null);
  const amountRef = useRef<TextInput>(null);
  const [curType, setCurType] = useState(type || "Chi");

  useEffect(() => {
    if (titleRef.current) titleRef.current.setNativeProps({ text: String(title || "") });
    if (amountRef.current) amountRef.current.setNativeProps({ text: String(amount || "") });
  }, [title, amount]);

  async function updateData() {
    const newTitle = titleRef.current?._lastNativeText || title;
    const newAmount = amountRef.current?._lastNativeText || amount;

    if (!newTitle || !newAmount) return alert("Vui lòng nhập đủ thông tin!");

    await db.runAsync(
      "UPDATE expenses SET title = ?, amount = ?, type = ? WHERE id = ?;",
      [newTitle, parseFloat(newAmount), curType, id]
    );

    router.back();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Tên khoản chi:</Text>
      <TextInput ref={titleRef} style={styles.input} defaultValue={String(title)} />

      <Text style={styles.label}>Số tiền:</Text>
      <TextInput
        ref={amountRef}
        style={styles.input}
        keyboardType="numeric"
        defaultValue={String(amount)}
      />

      <View style={styles.typeContainer}>
        <TouchableOpacity
          style={[styles.typeButton, curType === "Thu" && styles.active]}
          onPress={() => setCurType("Thu")}
        >
          <Text style={styles.typeText}>Thu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.typeButton, curType === "Chi" && styles.active]}
          onPress={() => setCurType("Chi")}
        >
          <Text style={styles.typeText}>Chi</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={updateData}>
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
    borderRadius: 8,
    width: 100,
    alignItems: "center",
  },
  active: {
    backgroundColor: "#007bff",
  },
  typeText: { color: "#000" },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  saveText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
