import { useRef, useEffect, useMemo, useLayoutEffect, ReactElement } from 'react';
import { FlatList, ListRenderItem, View, Pressable } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import SplashScreen from 'react-native-splash-screen';
import { StackScreenProps } from '@react-navigation/stack';
import LoadingIndicator from '@bdi/components/LoadingIndicator';
import FullScreenLoading from '@bdi/components/FullScreenLoading';
import RefreshIcon from '@bdi/components/RefreshIcon';
import { Event } from '@bdi/store/services/events/types';
import { Screens, RootStackScreenParamList } from '@bdi/types';
import useEvents from './useEvents';
import ListItem from './ListItem';
import styles from './styles';

const keyExtractor = (item: Event) => item.id;

const ITEM_HEIGHT = 60;

const getItemLayout = (_: Event[] | null | undefined, index: number) => {
  return {
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  };
};

type HomeScreenProps = StackScreenProps<RootStackScreenParamList, Screens.Home>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { data, isLoading, isFetching, refetchAllowed, refetch } = useEvents();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const savedRefetch = useRef<(() => void) | null>(null);
  useEffect(() => {
    savedRefetch.current = refetch;
  }, [refetch]);

  const renderItem: ListRenderItem<Event> = useMemo(() => {
    return ({ item }) => {
      const onPress = (event: Event) => {
        navigation.navigate(Screens.Event, { event });
      };
      return <ListItem event={item} onPress={onPress} />;
    };
  }, [navigation]);

  const headerRight: (() => ReactElement) | undefined = useMemo(() => {
    if (isFetching && !isLoading) {
      return () => (
        <View style={styles.headerButton}>
          <LoadingIndicator size={24} />
        </View>
      );
    }
    if (refetchAllowed) {
      const handleRefetch = () => savedRefetch.current?.();
      return () => (
        <Pressable onPress={handleRefetch} style={styles.headerButton}>
          <RefreshIcon size={24} />
        </Pressable>
      );
    }
    return undefined;
  }, [isFetching, isLoading, refetchAllowed]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight,
    });
  }, [navigation, headerRight]);

  const ListEmptyComponent: ReactElement | undefined = useMemo(() => {
    if (isLoading) {
      return <FullScreenLoading />;
    }
    return undefined;
  }, [isLoading]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Event>
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;