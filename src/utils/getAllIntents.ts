import { GatewayIntentBits } from 'discord.js';

export const getAllIntents = () => {
  return Object.keys(GatewayIntentBits).map(
    (key) => GatewayIntentBits[key as keyof typeof GatewayIntentBits],
  );
};
