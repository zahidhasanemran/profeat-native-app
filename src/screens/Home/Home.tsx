import {Text, SafeAreaView, View, Pressable} from 'react-native';
import React from 'react';
import useHome from './useHome';
import {useAuthStore} from '../../stores/authStore';
import AllPost from '../../components/AllPost';

const HomePage = () => {
  const {styles, posts} = useHome();
  const logout = useAuthStore(state => state.logout);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <SafeAreaView style={styles?.container}>
      <View style={styles.btnContainer}>
        <Text style={styles.title}>Dashboard</Text>
        <View>
          <Pressable onPress={handleLogout}>
            <Text>Logout</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Text>All Posts</Text>
        <View>
          <Pressable>
            <Text>Create</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.Posts}>
        <AllPost data={posts} />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
