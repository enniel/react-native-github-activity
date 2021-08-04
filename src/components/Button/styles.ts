import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '@rnga/theme/colors';
import typography from '@rnga/theme/typography';

interface Styles {
  button: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
    borderRadius: 5,
    height: 56,
    maxHeight: 56,
    paddingHorizontal: 20,
  },
  text: {
    ...typography.Heading5R,
    color: colors.white,
  },
});

export default styles;
