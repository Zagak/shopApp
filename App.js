import 'react-native-gesture-handler';
import ItemsShop from './Screens/ItemsShop';
import ItemDetails from './Screens/ItemDetails';
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
          <Stack.Screen name="Details" component={ItemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


