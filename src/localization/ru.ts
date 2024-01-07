export default {
  botStarted: (name: string) => `Бот '${name}' запущен`,
  eventLoadSucces: (event: string) => `✅ Эвент '${event}' загружен`,
  eventLoadError: (dir: string) => `❌ Ошибка при загрузке ${dir}`,
  error: `Произошла ошибка`,
};
