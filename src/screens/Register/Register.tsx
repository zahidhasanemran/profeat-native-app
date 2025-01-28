import {
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Button} from '@react-navigation/elements';
import useRegister from './useRegister';

const Register = () => {
  const {img, styles, navigation, onSubmit} = useRegister();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <ImageBackground style={styles?.container} source={{uri: img}}>
          <View style={styles?.form}>
            <View>
              <Text style={styles.title}> Register Screen </Text>
            </View>
            <View>
              <Text style={styles.label}>First Name</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    placeholder=""
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                  />
                )}
                name="firstName"
              />
              {errors.firstName && (
                <Text style={styles.warn}>First name is required.</Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Last Name</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    placeholder=""
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                  />
                )}
                name="lastName"
              />
              {errors.lastName && (
                <Text style={styles.warn}>Last name is required.</Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Email</Text>

              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    placeholder=""
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                  />
                )}
                name="email"
              />
              {errors.email && (
                <Text style={styles.warn}>Email is required.</Text>
              )}
            </View>
            <View>
              <Text style={styles.label}>Password</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    placeholder=""
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={styles.input}
                  />
                )}
                name="password"
              />
              {errors.password && (
                <Text style={styles.warn}>Password is required.</Text>
              )}
            </View>
            <View>
              <Pressable onPress={handleSubmit(onSubmit)}>
                <Text style={styles.btn}>Register</Text>
              </Pressable>
            </View>
            {/* Links */}
            <View>
              <Text style={styles.link}>
                Already have an account?
                <Button onPressIn={() => navigation.navigate('Login')}>
                  Login
                </Button>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
