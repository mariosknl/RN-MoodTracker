import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MoodItemRow } from '../components/MoodItemRow';
import { MoodPicker } from '../components/MoodPicker';
import { MoodOptionType, MoodOptionWithTimeStamp } from '../types';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimeStamp[]>([]);

  const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
    setMoodList(currentList => [
      ...currentList,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
      {moodList.map(item => (
        <MoodItemRow item={item} key={item.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
