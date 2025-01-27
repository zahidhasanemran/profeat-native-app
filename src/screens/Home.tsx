import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>HomePage</Text>
      <Button onPress={() => navigation.navigate('Profile')}>Profile</Button>
    </SafeAreaView>
  );
};

export default HomePage;

// const styles = StyleSheet.create({});
