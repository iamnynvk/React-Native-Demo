import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Device from '../screens/Device';
import TabNavigation from './TabNavigator';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.MAIN}
        screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name={ROUTES.MAIN} component={TabNavigation} />
          <Stack.Screen name={ROUTES.HOME} component={Home} />
          <Stack.Screen name={ROUTES.DEVICE} component={Device} />
          <Stack.Screen name={ROUTES.ACCOUNT} component={Account} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
