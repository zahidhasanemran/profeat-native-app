import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import {StyleSheet} from 'react-native';
import {loggedIn} from '../../services/auth';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useAuthStore} from '../../stores/authStore';
const img =
  'https://static.vecteezy.com/system/resources/previews/006/596/933/non_2x/abstract-dark-red-background-dark-lines-glow-waves-flicker-vector.jpg';

const styles = StyleSheet.create({
  link: {},
  warn: {
    fontSize: 15,
    color: 'yellow',
  },
  btn: {
    fontSize: 18,
    color: '#fff',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    width: 100,
    textAlign: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  form: {
    padding: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    gap: 10,
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 3,
    color: 'white',
  },
});

const useLogin = () => {
  const navigation = useNavigation();
  const login = useAuthStore(state => state.login);

  const logginMutation = useMutation({
    mutationFn: dataa => loggedIn(dataa),
    onSuccess: async data => {
      const token = data?.data?.token;
      try {
        await EncryptedStorage.setItem('user_token', token);
        if (token) {
          await login(token); // Save token using Zustand store
          navigation.navigate('Dashboard'); // Navigate to Dashboard
        }
      } catch (error) {
        console.error('Failed to save the token:', error);
      }
    },
  });
  const onSubmit = data => {
    // console.log(data);
    logginMutation.mutate(data);
  };
  return {
    img,
    styles,
    navigation,
    onSubmit,
  };
};

export default useLogin;
