import React from 'react';
import {Controller} from 'react-hook-form';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';
import useCreate from './useCreate';

const Create = () => {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    navigation,
  } = useCreate();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Create a New Post</Text>

      {/* Title Input */}
      <Text style={styles.label}>Title</Text>
      <Controller
        control={control}
        name="title"
        rules={{required: 'Title is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[styles.input, errors.title && styles.errorInput]}
            placeholder="Enter title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.title && (
        <Text style={styles.errorText}>{errors.title.message}</Text>
      )}

      {/* Content Input */}
      <Text style={styles.label}>Content</Text>
      <Controller
        control={control}
        name="content"
        rules={{required: 'Content is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={[styles.textArea, errors.content && styles.errorInput]}
            placeholder="Enter content"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline
            numberOfLines={5}
          />
        )}
      />
      {errors.content && (
        <Text style={styles.errorText}>{errors.content.message}</Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
      </TouchableOpacity>

      {/* Navigate Back to Dashboard */}
      <Button
        title="Go to Home"
        type="outline"
        containerStyle={styles.backButton}
        onPress={() => navigation.navigate('Dashboard')}
      />
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: 'top', // Ensures text starts from the top in textarea
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 5,
  },
  backButton: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
});
