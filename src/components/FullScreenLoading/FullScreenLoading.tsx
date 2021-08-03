import { View } from 'react-native';
import LoadingIndicator from '@bdi/components/LoadingIndicator';
import colors from '@bdi/theme/colors';
import styles from './styles';

const FullScreenLoading = () => (
  <View style={styles.loadingContainer}>
    <LoadingIndicator size={24} color={colors.primary} />
  </View>
);

export default FullScreenLoading;
