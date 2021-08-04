import { FC } from 'react';
import { Text, Pressable, StyleProp, ViewStyle } from 'react-native';
import LoadingIndicator from '@rnga/components/LoadingIndicator';
import colors from '@rnga/theme/colors';
import styles from './styles';

export interface ButtonProps {
  text: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  wrapperStyle?: StyleProp<ViewStyle>;
  testID?: string;
  nativeID?: string;
}

const Button: FC<ButtonProps> = ({
  text,
  onPress,
  loading,
  disabled,
  wrapperStyle,
  testID,
  nativeID,
}) => {
  const content = loading ? (
    <LoadingIndicator color={colors.black} size={24} />
  ) : (
    <Text style={styles.text}>{text}</Text>
  );
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, wrapperStyle]}
      disabled={disabled}
      testID={testID}
      nativeID={nativeID}
      accessible
      accessibilityRole="button"
      accessibilityLabel={text}>
      {content}
    </Pressable>
  );
};

export default Button;
