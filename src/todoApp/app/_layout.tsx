import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from '../Screens/Screen01';
import Screen02 from '../Screens/Screen02';
import Screen03 from '../Screens/Screen03';
import Screen04 from '../Screens/Screen04';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="screen01"
    >
      <Stack.Screen name="screen01" component={Screen01} />
      <Stack.Screen name="screen02" component={Screen02} />
      <Stack.Screen name="screen03" component={Screen03} />
      <Stack.Screen name="screen04" component={Screen04} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
