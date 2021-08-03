import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import HomeScreen from '@bdi/screens/HomeScreen';
import EventScreen from '@bdi/screens/EventScreen';
import ErrorBoundary from '@bdi/ErrorBoundary';
import { Screens, RootStackScreenParamList } from '@bdi/types';
import { store } from '@bdi/store';

const RootStack = createNativeStackNavigator<RootStackScreenParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={Screens.Home}
          component={HomeScreen}
          options={{ title: 'Events' }}
        />
        <RootStack.Screen
          name={Screens.Event}
          component={EventScreen}
          options={{ title: 'Event' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
