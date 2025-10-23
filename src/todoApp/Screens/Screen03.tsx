import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState , useEffect} from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import logo from '../assets/images/logo.png'
export default function Screen03({ route, navigation }: any) {
  const {nameuser, title} = route.params;
  const [textInput,setTextInput] = useState("");

  useEffect(()=>{
    setTextInput(title);
  },[title])
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 15 }}>
        <View
          style={{
            flexDirection: 'row-reverse',
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
              Hi {nameuser} {'\n'}Xin chào ngày tốt lành{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 50,
          }}>
          <Text style={{ fontFamily: 'bold', fontSize: 30, fontWeight:'700' }}>ADD YOUR JOB</Text>
        </View>
        <View
          style={{
            width: '100%',
            borderWidth: 1,
            height: 35,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <MaterialIcons
            name="list-alt"
            size={24}
            color="green"
            style={{ padding: 5 }}
          />
          <TextInput
            style={{ padding: 5, width: '88%', height: '90%' }}
            placeholder="input your job"
            value={textInput}
            onChangeText={(e)=> setTextInput(e)}
            
          />
        </View>
        <View
          style={{ flex: 1, alignItems: 'center', marginVertical:40 }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: 190,
              height: 44,
              borderRadius: 12,
              backgroundColor: '#00BDD6',
            }}
            onPress={() => {
              navigation.navigate('screen02', {titleNew: textInput});
            }}>
            <Text
              style={{
                fontWeight: '400', // nên để string thay vì số
                fontSize: 16,
                fontFamily: 'regular',
                color: 'white',
                marginRight: 6, // để tách chữ và icon
              }}>
              Finish
            </Text>
            <Feather name="arrow-right" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginVertical:30}}>
        <Image source={logo} style={{width:200,height:200}}/>
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
