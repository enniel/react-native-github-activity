import { View, Text, Image, Pressable } from 'react-native';
import { Event } from '@rnga/store/services/events/types';
import styles from './styles';

interface ListItemProps {
  event: Event;
  onPress(data: Event): void;
}

const ListItem = ({ event, onPress }: ListItemProps) => {
  const handlePress = () => onPress(event);
  return (
    <Pressable style={styles.wrapper} onPress={handlePress}>
      <Image style={styles.avatar} source={{ uri: event.actor.avatar_url }} />
      <View style={styles.content}>
        <Text style={styles.displayLogin}>{event.actor.display_login}</Text>
        <Text style={styles.event}>{event.type}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
