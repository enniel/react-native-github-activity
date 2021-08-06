import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import ErrorBoundary from '@rnga/ErrorBoundary';
import { store } from '@rnga/store';
import Navigation from './Navigation';

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
