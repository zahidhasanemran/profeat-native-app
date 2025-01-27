import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

const Search = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>Search</Text>
      {/* <Button onPress={() => navigation.navigate('Home')}>Home</Button> */}
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
