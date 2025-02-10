/* eslint-disable react/no-unstable-nested-components */
import {QueryClientProvider} from '@tanstack/react-query';
import React, {useEffect, useState} from 'react';
import {
  default as FontAwesome,
  default as Home,
  default as SearchIcon,
  default as User,
} from 'react-native-vector-icons/FontAwesome';
import HomePage from './src/screens/Home/Home';
// import ProfilePage from './src/screens/Profile';
import Search from './src/screens/Search';

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ActivityIndicator, View} from 'react-native';
import {queryClientEx} from './src/configs/query.config';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import {useAuthStore} from './src/stores/authStore';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();
const queryClient = queryClientEx;

// function TabNavigation() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: 'green',
//         headerShown: false,
//         tabBarLabelStyle: {
//           fontSize: 16,
//           fontWeight: 500,
//         },
//         tabBarStyle: {
//           height: 70,
//         },
//         tabBarInactiveTintColor: 'black',
//       }}
//       initialRouteName="Login">
//       <Tab.Screen
//         options={{
//           tabBarIcon: () => <Home name="home" size={20} color="#444" />,
//         }}
//         name="Dashboard"
//         component={HomePage}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: () => <User name="user" size={20} color="#444" />,
//         }}
//         name="Login"
//         component={Login}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: () => <User name="user" size={20} color="#444" />,
//         }}
//         name="Register"
//         component={Register}
//       />
//       <Tab.Screen
//         options={{
//           tabBarIcon: () => <SearchIcon name="search" size={20} color="#444" />,
//         }}
//         name="Search"
//         component={Search}
//       />
//     </Tab.Navigator>
//   );
// }

// function RootStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomePage} />
//       <Stack.Screen name="Profile" component={ProfilePage} />
//       <Stack.Screen name="Search" component={Search} />
//     </Stack.Navigator>
//   );
// }

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
        tabBarStyle: {
          height: 70,
        },
        tabBarInactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={HomePage}
        options={{
          tabBarIcon: () => <Home name="home" size={20} color="#444" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <FontAwesome name="search" size={20} color="#444" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'green',
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '500',
        },
        tabBarStyle: {
          height: 70,
        },
        tabBarInactiveTintColor: 'black',
      }}
      initialRouteName="Login">
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: () => <User name="sign-in" size={20} color="#444" />,
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: () => <User name="user-plus" size={20} color="#444" />,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const {isAuthenticated, loadToken} = useAuthStore();
  const [loading, setLoading] = useState(true);

  // Load token on app startup
  useEffect(() => {
    const initAuth = async () => {
      await loadToken();
      setLoading(false);
    };
    initAuth();
  }, []);

  if (loading) {
    // Show loading indicator while checking token
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
        {/* <TabNavigation /> */}
        {/* <RootStack /> */}
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
