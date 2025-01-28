import React from 'react';
import HomePage from './src/screens/Home';
import ProfilePage from './src/screens/Profile';
import Search from './src/screens/Search';
import Home from 'react-native-vector-icons/FontAwesome';
import User from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 500,
        },
        tabBarStyle: {
          height: 70,
        },
        tabBarInactiveTintColor: 'green',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: () => <Home name="home" size={20} color="#444" />,
        }}
        name="Home"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <User name="user" size={20} color="#444" />,
        }}
        name="Profile"
        component={ProfilePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <SearchIcon name="search" size={20} color="#444" />,
        }}
        name="Search"
        component={Search}
      />
    </Tab.Navigator>
  );
}

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
      <MyTabs />
      {/* <RootStack /> */}
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
