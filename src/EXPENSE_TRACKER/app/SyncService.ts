import { openDatabaseSync } from "expo-sqlite";
import { Alert } from "react-native";

const db = openDatabaseSync("expenses.db");

// ⭐️ API CỐ ĐỊNH ĐƯỢC SỬ DỤNG ⭐️
const DEFAULT_API_URL = "https://69040bd0d0f10a340b267d14.mockapi.io/tracker";

// ⭐️ Hàm XÓA TOÀN BỘ dữ liệu trên API ⭐️
async function deleteAllApiData(apiUrl: string) {
  try {
    // 1. Lấy danh sách ID hiện có trên API
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Lỗi khi lấy danh sách ID: ${response.statusText}`);
    
    const items = await response.json();
    if (!Array.isArray(items)) throw new Error("API không trả về mảng dữ liệu.");

    // 2. Thực hiện xóa từng mục một (DELETE theo ID)
    const deletePromises = items.map(item => 
      fetch(`${apiUrl}/${item.id}`, { method: 'DELETE' })
    );

    // Chờ tất cả các yêu cầu xóa hoàn thành
    await Promise.all(deletePromises);
    console.log(`Đã xóa thành công ${items.length} mục trên API.`);
    return true;

  } catch (error) {
    Alert.alert("Lỗi Xóa API", "Không thể xóa dữ liệu trên API. Vui lòng kiểm tra kết nối hoặc URL.");
    console.error("Lỗi khi xóa dữ liệu API:", error);
    return false;
  }
}

// Hàm đồng bộ chính
export async function syncData() {
  const apiUrl = DEFAULT_API_URL;
  
  // 1. Đọc toàn bộ dữ liệu từ SQLite
  let allExpenses;
  try {
    // Chỉ chọn 3 cột: title, amount, type
    allExpenses = await db.getAllAsync("SELECT title, amount, type FROM expenses;"); 
    
    if (!allExpenses || allExpenses.length === 0) {
      Alert.alert("Thông báo", "Database Local không có dữ liệu để đồng bộ. Chỉ xóa API.");
    }
  } catch (error) {
    return Alert.alert("Lỗi DB", "Không thể đọc dữ liệu từ database local.");
  }
  
  // ⭐️ 2. XÓA TOÀN BỘ DỮ LIỆU CŨ TRÊN API ⭐️
  const clearSuccess = await deleteAllApiData(apiUrl);
  if (!clearSuccess) return; // Dừng nếu xóa thất bại

  // 3. Đẩy (POST) từng mục từ Local DB lên API
  if (allExpenses.length > 0) {
    try {
      const uploadPromises = allExpenses.map(expense => 
        fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(expense), 
        })
      );

      await Promise.all(uploadPromises);
      Alert.alert("Thành công", `Đã đồng bộ ${allExpenses.length} mục lên API.`);
    } catch (error) {
      Alert.alert("Lỗi Đồng bộ", "Lỗi khi đẩy dữ liệu lên API. Vui lòng kiểm tra kết nối.");
      console.error("Lỗi khi POST dữ liệu:", error);
    }
  } else {
    Alert.alert("Hoàn tất", "API đã được xóa và Local DB trống, đồng bộ hoàn tất.");
  }
}