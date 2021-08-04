import { Text, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { StackScreenProps } from '@react-navigation/stack';
import { Screens, RootStackScreenParamList } from '@rnga/types';
import styles from './styles';

type EventScreenProps = StackScreenProps<RootStackScreenParamList, Screens.Event>;

const EventScreen = ({ route }: EventScreenProps) => {
  const event = route.params.event;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>{JSON.stringify(event, null, 4)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;
