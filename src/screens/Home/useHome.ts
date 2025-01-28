import {StyleSheet} from 'react-native';

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
  },
});

const menus = [
  {id: 1, name: 'all', text: 'All Item'},
  {id: 2, name: 'low', text: 'Low Item'},
  {id: 3, name: 'empty', text: 'Empty Item'},
];

const useHome = () => {
  return {
    styles,
    menus,
  };
};

export default useHome;
