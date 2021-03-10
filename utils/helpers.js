import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";

const NOTIFICATIONS_KEY = "@notification";

export const generateId = () => {
  return Math.random().toString(20).substring(2, 15);
};

const createNotification = () => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: "You need a refresher, Practice now!",
      body: "Start practicing now, Open the app now!",
    },
    trigger: {
      hour: 15,
      minute: 42,
      repeats: true,
    },
  });
};

export const clearLocalNotification = async () => {
  await AsyncStorage.removeItem(NOTIFICATIONS_KEY);
  Notifications.cancelAllScheduledNotificationsAsync();
};

export const setLocalNotification = async () => {
  const jsonData = await AsyncStorage.getItem(NOTIFICATIONS_KEY);
  const data = JSON.parse(jsonData);
  if (data === null) {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status === "granted") {
      Notifications.cancelAllScheduledNotificationsAsync();
      createNotification();

      await AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true));
    }
  }
};
