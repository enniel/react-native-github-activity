import { StyleSheet, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  list: ViewStyle;
  headerButton: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    flexGrow: 1,
  },
  headerButton: {
    marginRight: 4,
  },
});

export default styles;
