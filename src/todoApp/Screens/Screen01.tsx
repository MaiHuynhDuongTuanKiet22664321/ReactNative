import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import logo from '../assets/images/logo.png'
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Screen01() {
  const [textInput,setTextInput] = useState();
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
        <View style={{ marginTop: 30 }}>
          <Image source={logo} style={{ width: 271, height: 271 }} />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: 'bold', fontSize: 24, fontWeight: 700 }}>
            MANAGE YOUR TASK
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            height: 43,
            borderWidth: 1,
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Ionicons name="mail" size={24} style={{ padding: 5 }} />
          <TextInput style={{ width: '85%', height: '90%', padding: 5 }} value={textInput} onChangeText={(text) => setTextInput(text)} placeholder='Enter your name '/>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width:190,
            height:44,
            borderRadius:12,
            backgroundColor:'#00BDD6',
            marginTop:70
          }}
          onPress={()=>{navigation.navigate('screen02',{name : textInput})}}
          >
          <Text
            style={{
              fontWeight: 400,
              fontSize: 16,
              fontFamily: 'regular',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems:'center'
            }}>
            GET STARTED <Feather name="arrow-right" size={20} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
