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
import useLogin from './useLogin';
import {Button} from '@react-navigation/elements';

const Login = () => {
  
  const {img, styles, navigation, onSubmit} = useLogin();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
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
              <Text style={styles.title}> Login Screen </Text>
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
                <Text style={styles.btn}>Login</Text>
              </Pressable>
            </View>
            {/* Links */}
            <View>
              <Text style={styles.link}>Forgot Password?</Text>
              <Text style={styles.link}>
                Don't have an account?
                <Button onPressIn={() => navigation.navigate('Register')}>
                  Sign up
                </Button>
              </Text>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
