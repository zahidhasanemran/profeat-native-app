import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

const ProfilePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>ProfilePage</Text>
      <Button onPress={() => navigation.navigate('Search')}>Search</Button>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
