import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "EXPENSE TRACKER", headerTitleAlign: "center" }} />
        <Stack.Screen name="add" options={{ title: "Add Expense", headerTitleAlign: "center" }} />
        <Stack.Screen name="edit" options={{ title: "Edit Expense", headerTitleAlign: "center" }} />
        <Stack.Screen name="trash" options={{ title: "Trash Bin", headerTitleAlign: "center" }} />
        <Stack.Screen name="statistics" options={{ title: "Statistics", headerTitleAlign: "center" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
