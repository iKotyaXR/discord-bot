import { Localization } from '../types/localization';

export const mainConfig: IMainConfig = {
  enableLogs: true, // Всякий спам в консоль
  localization: 'en', // Локализация
  eventsDir: 'src/events/*.ts', // Папка с эвентами
};

export interface IMainConfig {
  enableLogs: boolean;
  localization: Localization;
  eventsDir: string;
}
