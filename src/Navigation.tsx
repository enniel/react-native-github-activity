import HomeScreen from '@rnga/screens/HomeScreen';
import EventScreen from '@rnga/screens/EventScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Screens, RootStackScreenParamList } from '@rnga/types';

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

export default Navigation;
