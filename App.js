import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Constants from 'expo-constants'; 

//import Apostila_3 from './components/apostila_3';
//import Apostila_4 from './components/apostila_4';
//import Apostila_004_ativ from './components/apostila_004_ativ';
import Index from './components/apostila_5';

let corApp = '#000';

export default function App() {
  return (
    <View style={styles.container}>
      <apostila_5 />
      <StatusBar style={corApp==='#000' ? 'light' : 'dark'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: corApp,
    padding: 8, 
    paddingTop: Constants.statusBarHeight,
  },
});