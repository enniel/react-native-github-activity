import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import typography from '@rnga/theme/typography';

interface Styles {
  container: ViewStyle;
  list: ViewStyle;
  headerButton: ViewStyle;
  errorView: ViewStyle;
  errorText: TextStyle;
  reloadButton: ViewStyle;
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
  errorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  errorText: {
    ...typography.Heading4R,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  reloadButton: {
    marginTop: 10,
  },
});

export default styles;
