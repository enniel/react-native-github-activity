import { Platform } from 'react-native';
import { MaterialIndicator, UIActivityIndicator } from 'react-native-indicators';
import colors from '@bdi/theme/colors';

const isAndroid = Platform.OS === 'android';

interface LoadingIndicatorProps {
  size?: number;
  color?: string;
}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
  const indicator = isAndroid ? (
    <MaterialIndicator color={colors.primary} {...props} />
  ) : (
    <UIActivityIndicator color={colors.primary} {...props} />
  );
  return indicator;
};

export default LoadingIndicator;
