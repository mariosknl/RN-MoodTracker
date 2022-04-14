import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext } from 'react';
import { MoodOptionType, MoodOptionWithTimeStamp } from './types';

type AppData = {
  moodList: MoodOptionWithTimeStamp[];
};

const dataKey = 'my-app-data';

const setAppData = async (appData: AppData) => {
  try {
    await AsyncStorage.setItem(dataKey, JSON.stringify(appData));
  } catch {}
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const result = await AsyncStorage.getItem(dataKey);
    if (result) {
      return JSON.parse(result);
    }
  } catch {}

  return null;
};

type AppContextType = {
  moodList: MoodOptionWithTimeStamp[];
  handleSelectMood: (mood: MoodOptionType) => void;
  handleDeleteMood: (mood: MoodOptionWithTimeStamp) => void;
};

const AppContext = createContext<AppContextType>({
  moodList: [],
  handleSelectMood: () => {},
  handleDeleteMood: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimeStamp[]>([]);

  const handleSelectMood = React.useCallback((selectedMood: MoodOptionType) => {
    setMoodList(current => {
      const newMoodList = [
        ...current,
        { mood: selectedMood, timestamp: Date.now() },
      ];

      setAppData({ moodList: newMoodList });

      return newMoodList;
    });
  }, []);

  const handleDeleteMood = React.useCallback(
    (mood: MoodOptionWithTimeStamp) => {
      setMoodList(current => {
        const newMoodList = current.filter(m => m.timestamp !== mood.timestamp);
        setAppData({ moodList: newMoodList });
        return newMoodList;
      });
    },
    [],
  );

  React.useEffect(() => {
    const fetchAppData = async () => {
      const data = await getAppData();
      if (data) {
        setMoodList(data.moodList);
      }
    };

    fetchAppData();
  }, []);
  return (
    <AppContext.Provider
      value={{ moodList, handleSelectMood, handleDeleteMood }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
