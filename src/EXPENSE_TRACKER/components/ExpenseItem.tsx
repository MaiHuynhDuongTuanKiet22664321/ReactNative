import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ExpenseItemProps {
  title: string;
  amount: number;
  createdAt: string;
  type: "Thu" | "Chi";
}

export default function ExpenseItem({
  title,
  amount,
  createdAt,
  type,
}: ExpenseItemProps) {
  const isIncome = type === "Thu";

  return (
    <View style={[styles.item, isIncome ? styles.income : styles.expense]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{createdAt}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text
          style={[
            styles.amount,
            isIncome ? styles.amountIncome : styles.amountExpense,
          ]}
        >
          {isIncome ? "+" : "-"}
          {amount.toLocaleString()}₫
        </Text>
        <Text style={[styles.type, isIncome ? styles.incomeText : styles.expenseText]}>
          {type}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 6,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  date: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
  },
  amountIncome: {
    color: "#2ECC71", // xanh - Thu
  },
  amountExpense: {
    color: "#E74C3C", // đỏ - Chi
  },
  type: {
    fontSize: 13,
    marginTop: 3,
  },
  incomeText: {
    color: "#27AE60",
  },
  expenseText: {
    color: "#C0392B",
  },
  income: {
    borderLeftWidth: 5,
    borderLeftColor: "#2ECC71",
  },
  expense: {
    borderLeftWidth: 5,
    borderLeftColor: "#E74C3C",
  },
});
