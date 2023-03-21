import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { DeviceDimensions } from '../constants/DeviceDimensions';
interface Props{
  message:string
}
const Loading:React.FC<Props>=({ message })=> {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator style={styles.loading} size="large" />
    </View>
  );
}

export default Loading;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute'
  },
  message: {
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: DeviceDimensions.height / 2 +20,
    left: DeviceDimensions.width / 2 -30,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: DeviceDimensions.height / 2 - 20,
    left: DeviceDimensions.width / 2 - 20, 
  }  
});