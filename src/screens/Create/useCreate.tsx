import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@tanstack/react-query';

import {useForm} from 'react-hook-form';
import {createPost} from '../../services/posts';

const useCreate = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const createPostMutation = useMutation({
    mutationFn: data => createPost(data),
    onSuccess: () => {
      reset();
      navigation.navigate('Dashboard');
    },
  });

  const onSubmit = data => {
    createPostMutation.mutate(data);
  };

  return {
    control,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    navigation,
  };
};

export default useCreate;
