import { ClientOptions, Client as DiscordClient } from 'discord.js';
import { getAllIntents } from '../utils/getAllIntents';
import { glob } from 'glob';
import { Event, EventKeys } from '../types/events';

class Client extends DiscordClient {
  private authToken: string | undefined;

  constructor(token?: string, options?: ClientOptions) {
    super({ intents: getAllIntents(), ...options });

    this.authToken = token;
  }

  start() {
    this.login(this.authToken);
    // Import Events
    glob(`src/events/*.ts`).then(async (files) => {
      for (const file of files) {
        try {
          const { default: event }: { default: Event<EventKeys> } = await import(process.cwd() + '\\' + file);

          console.log(`✅ Эвент '${event.name}' загружен `);
          this.on(event.name, event.run);
        } catch (error) {
          console.log(`❌ Ошибка при загрузке ${file}`);
          console.log(error);
        }
      }
    });
  }
}

export default Client;
