import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthStore = create(set => ({
  token: null,
  isAuthenticated: false,

  // Function to log in and store token
  login: async token => {
    await AsyncStorage.setItem('user_token', token); // Save token in storage
    set({token, isAuthenticated: true});
  },

  // Function to log out and clear token
  logout: async () => {
    await AsyncStorage.removeItem('user_token'); // Remove token from storage
    set({token: null, isAuthenticated: false});
  },

  // Function to load token from AsyncStorage at app startup
  loadToken: async () => {
    const token = await AsyncStorage.getItem('user_token');
    if (token) {
      set({token, isAuthenticated: true});
    }
  },
}));
