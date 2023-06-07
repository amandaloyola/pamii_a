import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'; 

let corAPP = '#000'
// import Apostila_3 from './components/apostila_3';
import Apostila_4 from './components/apostila_4';
//import Apostila_004_ativ from './components/apostila_004_ativ';
//import Apostila_05 from './components/aportila_005';

let corApp = '#000';
export default function App() {
  return (
    <View style={styles.container}>
      <Apostila_4/>
      <StatusBar style={corAPP === '#000' ? "light" : "dark"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: corAPP,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight,
  },

});