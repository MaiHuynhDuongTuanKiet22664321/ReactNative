import React, { useCallback, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, ActivityIndicator } from "react-native";
import { openDatabaseSync } from "expo-sqlite";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect } from "expo-router";
// Cần cài đặt thư viện này:
// ⭐️ npm install react-native-chart-kit
// ⭐️ npm install react-native-svg
import { BarChart } from "react-native-chart-kit";

const db = openDatabaseSync("expenses.db");
const screenWidth = Dimensions.get("window").width;

// Khai báo kiểu dữ liệu cho kết quả truy vấn
interface MonthlyData {
  monthYear: string;
  totalThu: number;
  totalChi: number;
}

export default function StatisticsScreen() {
  const [data, setData] = useState<MonthlyData[]>([]);
  const [loading, setLoading] = useState(true);

  const loadStatistics = useCallback(async () => {
    setLoading(true);
    try {
      // 1. Truy vấn dữ liệu tổng thu/chi theo tháng
      // Sử dụng hàm SUBSTR để trích xuất tháng/năm từ cột createdAt (ví dụ: '25/10/2025' -> '10/2025')
      const result = await db.getAllAsync(`
        SELECT 
            SUBSTR(createdAt, 4, 7) as monthYear,
            SUM(CASE WHEN type = 'Thu' THEN amount ELSE 0 END) as totalThu,
            SUM(CASE WHEN type = 'Chi' THEN amount ELSE 0 END) as totalChi
        FROM expenses
        WHERE deleted = 0
        GROUP BY monthYear
        ORDER BY monthYear DESC;
      `);
      
      setData(result as MonthlyData[]);
    } catch (error) {
      console.error("Lỗi khi tải thống kê:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadStatistics();
    }, [loadStatistics])
  );

  // 2. Chuẩn bị dữ liệu cho biểu đồ (Chart Data)
  const chartData = {
    labels: data.map(d => d.monthYear),
    datasets: [
      {
        data: data.map(d => d.totalThu),
        color: (opacity = 1) => `rgba(40, 167, 69, ${opacity})`, // Xanh lá cho Thu
        name: "Thu",
      },
      {
        data: data.map(d => d.totalChi),
        color: (opacity = 1) => `rgba(220, 53, 69, ${opacity})`, // Đỏ cho Chi
        name: "Chi",
      },
    ],
  };

  // Nếu không có dữ liệu, biểu đồ sẽ bị lỗi, cần xử lý để BarChart có ít nhất 1 mục
  const safeChartData = data.length > 0 ? chartData : {
    labels: ["Không có"],
    datasets: [{ data: [0], name: "Thu" }, { data: [0], name: "Chi" }],
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={{ marginTop: 10 }}>Đang tải thống kê...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>📊 Thống kê Thu/Chi Theo Tháng</Text>
      
      <ScrollView horizontal={true} contentContainerStyle={styles.chartScroll}>
        <BarChart
          data={safeChartData}
          width={Math.max(screenWidth - 32, data.length * 70)} // Đảm bảo chiều rộng mở rộng nếu có nhiều tháng
          height={300}
          yAxisLabel="" // Bỏ ký hiệu $ hoặc tương tự
          chartConfig={{
            backgroundColor: "#ffffff",
            backgroundGradientFrom: "#f0f0f0",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0, // Không hiển thị số thập phân trên trục Y
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            propsForLabels: {
              fontSize: 10, // Kích thước chữ cho nhãn
            },
            barPercentage: 0.5,
          }}
          style={styles.chartStyle}
          verticalLabelRotation={-30} // Xoay nhãn tháng/năm
          fromZero={true} // Bắt đầu từ 0
        />
      </ScrollView>
      
      {data.length === 0 && (
        <Text style={styles.emptyText}>Không có dữ liệu chi tiêu để thống kê.</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: 'center' },
  chartScroll: { paddingHorizontal: 4 },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  emptyText: { textAlign: 'center', marginTop: 50, color: 'gray', fontSize: 16 },
});