import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';

import Apostila03 from './components/apostila_3/Index'

export default function App() {
  return (
    <View style={styles.container}>
      <Apostila03/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
