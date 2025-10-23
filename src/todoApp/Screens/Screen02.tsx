import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState, useEffect } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { data } from '../data';

export default function Screen02({ navigation, route }: any) {
  const { name, titleNew, titleSua, id } = route.params;
  const [todos, setTodos] = useState(data);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    if (!titleNew) return; // tránh add khi rỗng

    const newTodo = {
      id: Date.now(),
      title: titleNew,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]); //
  }, [titleNew]);

  useEffect(() => {
    if (!titleSua) return;

    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: titleSua } : item))
    );
  }, [titleSua, id]); // ✅ thêm dependencies

  const setCompleted = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const setDataSearch = () => {};

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 15,
          backgroundColor: '#9095A0',
        }}>
        {item.completed ? (
          <Fontisto
            name="checkbox-active"
            size={24}
            color="green"
            style={{ padding: 5, marginHorizontal: 10 }}
            onPress={() => setCompleted(item.id)}
          />
        ) : (
          <Fontisto
            name="checkbox-passive"
            size={24}
            color="green"
            style={{ padding: 5, marginHorizontal: 10 }}
            onPress={() => setCompleted(item.id)}
          />
        )}
        <Text
          style={{ padding: 5 }}
          onPress={() => {
            navigation.navigate('screen04', { title: item.title, id: item.id });
          }}>
          {item.title}
        </Text>

        <MaterialIcons
          name="delete"
          size={24}
          color="black"
          style={{ padding: 5 }}
          onPress={() => deleteTodo(item.id)}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 15 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Feather
            name="arrow-left"
            size={24}
            color="gray"
            onPress={() => navigation.goBack()}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome
              name="user"
              size={24}
              color="black"
              style={{ padding: 5 }}
            />
            <Text style={{ padding: 5 }}>
              {' '}
              Hi {name} {'\n'}Xin chào ngày tốt lành{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            height: 35,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 20,
          }}>
          <Feather
            name="search"
            size={20}
            color="black"
            style={{ padding: 5 }}
          />
          <TextInput
            style={{ padding: 5, width: '90%', height: '90%' }}
            placeholder="Search"
          />
        </View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ paddingTop: 70, paddingBottom: 20, gap: 10 }}
        />

        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#26c3d9',
              width: 50,
              height: 50,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 30, // cách đáy 30px
              zIndex: 1,
            }}
            onPress={() => {
              navigation.navigate('screen03', { nameuser: name });
            }}>
            <FontAwesome6 name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
