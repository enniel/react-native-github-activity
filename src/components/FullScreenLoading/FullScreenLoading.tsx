import { View } from 'react-native';
import LoadingIndicator from '@rnga/components/LoadingIndicator';
import colors from '@rnga/theme/colors';
import styles from './styles';

const FullScreenLoading = () => (
  <View style={styles.loadingContainer}>
    <LoadingIndicator size={24} color={colors.primary} />
  </View>
);

export default FullScreenLoading;
