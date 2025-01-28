import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

const TabItem = ({sm}: any) => {
  return (
    <Pressable style={styles?.btn} key={sm?.id}>
      <Text style={styles.btnText}>{sm?.text}</Text>
    </Pressable>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  btn: {},
  btnText: {
    fontSize: 12,
    fontWeight: 400,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
    color: 'black',
  },
});
