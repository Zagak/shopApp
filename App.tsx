import 'react-native-gesture-handler';
import ItemsShop from './Screens/ItemsShop';
import ItemDetails from './Screens/ItemDetails';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import React from 'react';
import { Item } from './types';
export type RootStackParams = {
  Shop: undefined;
  Details: Item
};
const Stack = createNativeStackNavigator<RootStackParams>();
export default function App() {

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Shop' screenOptions={{
            headerShown: false,
          }}>
            <Stack.Screen name="Shop" component={ItemsShop} />
            <Stack.Screen name="Details" component={ItemDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}


