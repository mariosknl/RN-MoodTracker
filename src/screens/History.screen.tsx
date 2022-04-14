import React from 'react';
import { Platform, ScrollView, UIManager } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <ScrollView>
      {appContext.moodList
        .slice()
        .reverse()
        .map(item => (
          <MoodItemRow item={item} key={item.timestamp} />
        ))}
    </ScrollView>
  );
};
