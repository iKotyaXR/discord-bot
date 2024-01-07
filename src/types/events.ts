import { ClientEvents } from 'discord.js';

export type EventKeys = keyof ClientEvents;

export interface EventProps<T> {
  name: T;
}
export interface Event<T extends EventKeys> extends EventProps<T> {
  name: T;
  run: (...args: ClientEvents[T]) => void;
}

