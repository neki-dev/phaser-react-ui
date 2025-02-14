import type Phaser from 'phaser';
import { useEffect, useState } from 'react';

/**
 * Get actual value from event.
 *
 * @param emitter - Events emitter
 * @param event - Event
 * @param defaultValue - Default value
 */
export function useEventValue<T>(
  emitter: Phaser.Events.EventEmitter | null,
  event: string,
  defaultValue: T,
): T {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (!emitter) {
      return;
    }

    emitter.on(event, setValue);

    return () => {
      emitter.off(event, setValue);
    };
  }, [emitter, event]);

  return value;
}
