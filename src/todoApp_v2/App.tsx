import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import {
  SQLiteProvider,
  useSQLiteContext,
  type SQLiteDatabase,
} from 'expo-sqlite';
import {
  Feather,
  FontAwesome,
  FontAwesome6,
  Fontisto,
  MaterialIcons,
} from '@expo/vector-icons';

// --- Kiểu dữ liệu ---
interface ItemEntity {
  id: number;
  done: boolean;
  value: string;
}

// --- App chính ---
export default function App() {
  return (
    <SQLiteProvider databaseName="db.db" onInit={migrateDbIfNeeded}>
      <Main />
    </SQLiteProvider>
  );
}

function Main() {
  const db = useSQLiteContext();
  const [text, setText] = useState('');
  const [items, setItems] = useState<ItemEntity[]>([]);
  const [search, setSearch] = useState('');
  const name = 'User';

  // --- Lấy dữ liệu ---
  const refetchItems = useCallback(() => {
    async function refetch() {
      const data = await db.getAllAsync<ItemEntity>('SELECT * FROM items;');
      setItems(data);
    }
    refetch();
  }, [db]);

  useEffect(() => {
    refetchItems();
  }, []);

  // --- CRUD ---
  const addItem = async () => {
    if (!text.trim()) return;
    await db.runAsync('INSERT INTO items (done, value) VALUES (?, ?);', false, text);
    setText('');
    refetchItems();
  };

  const toggleDone = async (id: number, done: boolean) => {
    await db.runAsync('UPDATE items SET done = ? WHERE id = ?;', !done, id);
    refetchItems();
  };

  const deleteItem = async (id: number) => {
    await db.runAsync('DELETE FROM items WHERE id = ?;', id);
    refetchItems();
  };

  // --- Lọc tìm kiếm ---
  const filtered = items.filter((it) =>
    it.value.toLowerCase().includes(search.toLowerCase())
  );

  // --- Giao diện ---
  const renderItem = ({ item }: { item: ItemEntity }) => (
    <TouchableOpacity
      style={styles.todoItem}>
      <Fontisto
        name={item.done ? 'checkbox-active' : 'checkbox-passive'}
        size={24}
        color="green"
        style={styles.icon}
        onPress={() => toggleDone(item.id, item.done)}
      />
      <Text
        style={[
          styles.todoText,
          item.done && { textDecorationLine: 'line-through', color: 'gray' },
        ]}>
        {item.value}
      </Text>
      <MaterialIcons
        name="delete"
        size={24}
        color="black"
        style={styles.icon}
        onPress={() => deleteItem(item.id)}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Feather name="arrow-left" size={24} color="gray" />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="user" size={24} color="black" style={{ padding: 5 }} />
          <Text>Hi {name}{'\n'}Xin chào ngày tốt lành</Text>
        </View>
      </View>

      {/* Thanh search */}
      <View style={styles.searchBar}>
        <Feather name="search" size={20} color="black" style={{ padding: 5 }} />
        <TextInput
          style={{ flex: 1, paddingHorizontal: 5 }}
          placeholder="Tìm kiếm..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Input thêm task */}
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Thêm công việc..."
          value={text}
          onChangeText={setText}
          onSubmitEditing={addItem}
          style={styles.input}
        />
        <TouchableOpacity onPress={addItem} style={styles.addBtn}>
          <FontAwesome6 name="add" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Danh sách công việc */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

// --- Khởi tạo Database ---
async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version } = await db.getFirstAsync<{ user_version: number }>(
    'PRAGMA user_version'
  );
  if (user_version >= DATABASE_VERSION) return;

  await db.execAsync(`
    PRAGMA journal_mode = 'wal';
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY NOT NULL,
      done INT,
      value TEXT
    );
    PRAGMA user_version = ${DATABASE_VERSION};
  `);
}

// --- Style ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 60,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    height: 40,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  },
  addBtn: {
    marginLeft: 10,
    backgroundColor: '#26c3d9',
    borderRadius: 25,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#9095A0',
    borderRadius: 15,
    paddingVertical: 5,
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    color: '#000',
    paddingVertical: 5,
  },
  icon: {
    padding: 5,
    marginHorizontal: 8,
  },
});
