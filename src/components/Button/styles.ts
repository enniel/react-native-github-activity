import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '@bdi/theme/colors';
import typography from '@bdi/theme/typography';

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
    backgroundColor: colors.primary,
    borderRadius: 5,
    height: 56,
    maxHeight: 56,
  },
  text: {
    ...typography.Heading5R,
    color: colors.black,
  },
});

export default styles;
