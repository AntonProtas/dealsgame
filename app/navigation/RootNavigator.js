//libs
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GoodHabitsScreen, BadHabitsScreen } from '../screens';

import { NavigationIcon } from './NavigationIcon';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="GoodHabits"
        tabBarOptions={{
          showLabel: false,
          style: {
            height: '7%'
          }
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <NavigationIcon route={route.name} isFocused={focused} />
          )
        })}
      >
        <Tab.Screen name="GoodHabits" component={GoodHabitsScreen} />
        <Tab.Screen name="BadHabits" component={BadHabitsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
