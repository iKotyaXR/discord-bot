import { ClientEvents } from 'discord.js';
import { Event, EventKeys, EventProps } from '../types/events';

export function createEvent<T extends EventKeys>(name: T, run: (...args: ClientEvents[T]) => void): Event<T>;

export default function createEvent<T extends EventKeys>(
  eventConfig: EventProps<T> | T,
  run: (...args: ClientEvents[T]) => void,
): Event<T> {
  const event: Event<T> = {
    name: typeof eventConfig === 'string' ? eventConfig : eventConfig.name,
    run,
  };

  return event;
}

