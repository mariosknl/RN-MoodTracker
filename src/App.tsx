import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { AppProvider } from './App.provider';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

export const App: React.FC = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
