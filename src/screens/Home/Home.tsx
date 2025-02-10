import {Text, SafeAreaView, View, Pressable} from 'react-native';
import React from 'react';
import TabItem from '../../components/TabItem';
import useHome from './useHome';
import {useAuthStore} from '../../stores/authStore';

const HomePage = () => {
  const {styles, menus} = useHome();
  const logout = useAuthStore(state => state.logout); // Zustand logout function

  const handleLogout = async () => {
    await logout(); // Clear token and update state
  };

  return (
    <SafeAreaView style={styles?.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View>
        <Pressable onPress={handleLogout}>
          <Text>Logout</Text>
        </Pressable>
      </View>
      <View style={styles.btnContainer}>
        {menus?.map(sm => (
          <TabItem sm={sm} key={sm?.id} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
