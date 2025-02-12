import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';
import {StyleSheet} from 'react-native';
import {register} from '../../services/auth';
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

const useRegister = () => {
  const navigation = useNavigation();
  const registerMutation = useMutation({
    mutationFn: data => register(data),
    onSuccess: () => {},
  });
  const onSubmit = data => {
    // console.log(data);
    registerMutation.mutate(data);
  };
  return {
    img,
    styles,
    navigation,
    onSubmit,
  };
};

export default useRegister;
