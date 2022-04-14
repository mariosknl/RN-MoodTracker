import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppProvider } from './App.provider';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

export const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
