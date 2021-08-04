import { useRef, useEffect, useMemo, useLayoutEffect, ReactElement } from 'react';
import { FlatList, ListRenderItem, View, Pressable, Text } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import SplashScreen from 'react-native-splash-screen';
import { StackScreenProps } from '@react-navigation/stack';
import LoadingIndicator from '@rnga/components/LoadingIndicator';
import FullScreenLoading from '@rnga/components/FullScreenLoading';
import RefreshIcon from '@rnga/components/RefreshIcon';
import Button from '@rnga/components/Button';
import { Event } from '@rnga/store/services/events/types';
import { Screens, RootStackScreenParamList } from '@rnga/types';
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
  const {
    data,
    isLoading,
    isFetching,
    isError,
    isUninitialized,
    isSuccess,
    refetchAllowed,
    refetch,
    requestId,
  } = useEvents();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // save refetch to ref for minimize rerenders
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
    // show loading indicator
    if (isFetching && !isLoading) {
      return () => (
        <View style={styles.headerButton}>
          <LoadingIndicator size={24} />
        </View>
      );
    }
    // show button for manual refetch
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

  // set header right buttons
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight,
    });
  }, [navigation, headerRight]);

  const ListEmptyComponent: ReactElement | undefined = useMemo(() => {
    // show error
    if (isError) {
      const handleRefetch = () => savedRefetch.current?.();
      return (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>Oh no! An error occurred while loading the data.</Text>
          <Button onPress={handleRefetch} wrapperStyle={styles.reloadButton} text="Try again" />
        </View>
      );
    }
    // show full screen indicator on first loading
    if (isLoading) {
      return <FullScreenLoading />;
    }
    return undefined;
  }, [isLoading, isError]);

  console.debug(`${requestId} -> hasData`, !!data);
  console.debug(`${requestId} -> isLoading`, isLoading);
  console.debug(`${requestId} -> isFetching`, isFetching);
  console.debug(`${requestId} -> isError`, isError);
  console.debug(`${requestId} -> isUninitialized`, isUninitialized);
  console.debug(`${requestId} -> isSuccess`, isSuccess);
  console.debug(`${requestId} -> refetchAllowed`, refetchAllowed);
  console.debug('-------------------------------------------------');

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
