import React from 'react';
import { View } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: React.FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      {appContext.moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};
