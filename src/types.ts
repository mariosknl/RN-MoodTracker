export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimeStamp = {
  mood: MoodOptionType;
  timestamp: number;
};
