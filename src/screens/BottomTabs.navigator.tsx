import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
import { HomeIcon } from '../components/Icons';
import { Analytics } from './Analytics.screen';
import { History } from './History.screen';
import { Home } from './Home.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({}) => {
          if (route.name === 'Home') {
            return <HomeIcon />;
          }
          return <Text>{route.name}</Text>;
        },
      })}>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
};
