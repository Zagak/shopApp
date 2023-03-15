import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './constants/Colors';
import Header from './components/Header';
import ItemsList from './components/ItemsList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header/>
      <ItemsList/>
    </View>
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
