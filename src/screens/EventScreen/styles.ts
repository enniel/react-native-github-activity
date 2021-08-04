import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import typography from '@rnga/theme/typography';
import colors from '@rnga/theme/colors';

interface Styles {
  container: ViewStyle;
  content: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 20,
  },
  text: {
    ...typography.Body2,
    color: colors.blue,
  },
});

export default styles;
