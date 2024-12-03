import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import ProfileCards from './components/listaItems';
import OptionList from './components/Home';
import UserListView from './components/listaItems2';
import Carousel from './components/tutorialConnect';
import Controller from './components/Controller';
import Buttons from './components/Buttons';
/*
function HomeScreen() {
  return (
    <View style={styles.container}>
      <OptionList></OptionList>
      <StatusBar style="auto" />
    </View>
  );
}

function ListScreen() {
  return (
    <View style={styles.container}>
      <ProfileCards></ProfileCards>
      <StatusBar style="auto" />
    </View>
  );
}*/ 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={OptionList} />
        <Stack.Screen name="List" component={UserListView} />
        <Stack.Screen name="Tutorial" component={Carousel} />
        <Stack.Screen name="Controller" component={Controller} />
        <Stack.Screen name="Buttons" component={Buttons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
