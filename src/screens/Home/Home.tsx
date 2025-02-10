import {Text, SafeAreaView, View} from 'react-native';
import React from 'react';
import TabItem from '../../components/TabItem';
import useHome from './useHome';

const HomePage = () => {
  const {styles, menus} = useHome();
  return (
    <SafeAreaView style={styles?.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.btnContainer}>
        {menus?.map(sm => (
          <TabItem sm={sm} key={sm?.id} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
