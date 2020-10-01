import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

import StartScreen from '../screens/StartScreen';
import DetailScreen from '../screens/DetailScreen';
import TabBotton from '../components/TabBotton';

const MainStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator 
        screenOptions={{
            headerStyle: { backgroundColor: '#38b2ac' },
            title: 'Search Characters',
            headerTitleStyle: { color: '#fff'}
        }} >
        <MainStack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
        <MainStack.Screen name="MainScreen" >
          {props => <TabBotton {...props} />}
        </MainStack.Screen>
        <MainStack.Screen name="DetailScreen" >
          {props => <DetailScreen {...props} />}
        </MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;