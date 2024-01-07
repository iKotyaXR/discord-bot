import { ClientOptions, Client as DiscordClient } from 'discord.js';
import { getAllIntents } from '../utils/getAllIntents';
import { useLocalization } from '../utils/useLocalization';
import { glob } from 'glob';
import { Event, EventKeys } from '../types/events';
import { mainConfig } from '../configs/main';

class Client extends DiscordClient {
  private authToken: string | undefined;
  public localization = useLocalization();

  constructor(token?: string, options?: ClientOptions) {
    super({ intents: getAllIntents(), ...options });

    this.authToken = token;
  }

  start() {
    this.login(this.authToken);

    // Import Events
    glob(mainConfig.eventsDir).then(async (files) => {
      for (const file of files) {
        try {
          const { default: event }: { default: Event<EventKeys> } = await import(process.cwd() + '\\' + file);

          if (mainConfig.enableLogs) console.log(this.localization.eventLoadSucces(event.name));

          this.on(event.name, event.run);
        } catch (error) {
          if (mainConfig.enableLogs) {
            console.log(this.localization.eventLoadError(file));
            console.log(error);
          }
        }
      }
    });
  }
}

export default Client;

