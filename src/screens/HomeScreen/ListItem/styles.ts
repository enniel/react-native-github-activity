import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import typography from '@bdi/theme/typography';
import colors from '@bdi/theme/colors';

interface Styles {
  wrapper: ViewStyle;
  avatar: ImageStyle;
  content: ViewStyle;
  displayLogin: TextStyle;
  event: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: colors.grayLight,
  },
  content: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  displayLogin: {
    ...typography.Heading6SB,
  },
  event: {
    ...typography.Body2,
    color: colors.blue,
  },
});

export default styles;
