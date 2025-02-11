import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import useHome from '../screens/Home/useHome';

const AllPost = () => {
  const {data} = useHome();

  return (
    <ScrollView style={styles.container}>
      {data?.data?.length &&
        data?.data?.map(sm => {
          return (
            <View style={styles.card} key={sm?._id}>
              <Text style={styles?.title}>{sm?.title}</Text>
              <Text style={styles.content}>{sm?.content}</Text>
              <View style={styles.btnContainer}>
                <Pressable>
                  <Text style={styles.btn}>Edit</Text>
                </Pressable>
                <Pressable>
                  <Text style={[styles.btn, {backgroundColor: 'red'}]}>
                    Delete
                  </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default AllPost;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
  card: {
    marginBottom: 40,
    borderColor: 'green',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    color: 'white',
    borderWidth: 1,
    borderRadius: 4,
  },
});
