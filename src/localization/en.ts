export default {
  botStarted: (name: string) => `Bot '${name}' started`,
  eventLoadSucces: (event: string) => `✅ Event '${event}'loaded`,
  eventLoadError: (dir: string) => `❌ Error loading ${dir}`,
  error: `An error occurred`,
};
