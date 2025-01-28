/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {
  default as Home,
  default as SearchIcon,
  default as User,
} from 'react-native-vector-icons/FontAwesome';
import {QueryClientProvider} from '@tanstack/react-query';
import HomePage from './src/screens/Home/Home';
import ProfilePage from './src/screens/Profile';
import Search from './src/screens/Search';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import {queryClientEx} from './src/configs/query.config';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const queryClient = queryClientEx;

function TabNavigation() {
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
        tabBarInactiveTintColor: 'black',
      }}
      initialRouteName="Login">
      <Tab.Screen
        options={{
          tabBarIcon: () => <Home name="home" size={20} color="#444" />,
        }}
        name="Dashboard"
        component={HomePage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <User name="user" size={20} color="#444" />,
        }}
        name="Login"
        component={Login}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <User name="user" size={20} color="#444" />,
        }}
        name="Register"
        component={Register}
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
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <TabNavigation />
        {/* <RootStack /> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
