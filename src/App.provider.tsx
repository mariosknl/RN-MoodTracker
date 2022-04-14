import React, { createContext, useContext } from 'react';
import { MoodOptionType, MoodOptionWithTimeStamp } from './types';

type AppContextType = {
  moodList: MoodOptionWithTimeStamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimeStamp[]>([]);

  const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
    setMoodList(currentList => [
      ...currentList,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);
  return (
    <AppContext.Provider value={{ moodList, handleSelectMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
