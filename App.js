import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './constants/Colors';
import ItemsShop from './Screens/ItemsShop';
import ItemPurchase from './Screens/ItemPurchase';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Shop' screenOptions={{
          headerShown:false,
        }}>
          <Stack.Screen name="Shop" component={ItemsShop} />
          <Stack.Screen name="Purchase" component={ItemPurchase} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBrown,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
