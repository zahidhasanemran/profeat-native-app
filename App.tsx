import React from 'react';
import HomePage from './src/screens/Home';
import ProfilePage from './src/screens/Profile';
import Search from './src/screens/Search';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   app: {
//     fontSize: 30,
//     color: 'red',
//   },
//   image: {
//     width: 200,
//     height: 150,
//     marginTop: 50,
//   },
//   button: {
//     backgroundColor: 'green',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//     width: '50%',
//   },
//   text: {
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
// });
