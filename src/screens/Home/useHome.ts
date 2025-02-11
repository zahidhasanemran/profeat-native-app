import {useQuery} from '@tanstack/react-query';
import {StyleSheet} from 'react-native';
import {getAllPosts} from '../../services/posts';

const styles = StyleSheet.create({
  container: {
    padding: '4%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
});

const useHome = () => {
  const {data, isLoading, error} = useQuery({
    queryKey: ['all-posts'],
    queryFn: getAllPosts,
  });

  return {
    styles,
    data,
    isLoading,
    error,
  };
};

export default useHome;
