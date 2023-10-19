import type Phaser from 'phaser';
import { useEffect } from 'react';

/**
 * Subscribe to event.
 *
 * @param emitter - Events emitter
 * @param event - Event
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export function useEvent(
  emitter: Phaser.Events.EventEmitter,
  event: string,
  callback: (...args: any[]) => void,
  depends: any[],
) {
  useEffect(() => {
    emitter.on(event, callback);

    return () => {
      emitter.off(event, callback);
    };
  }, [event, ...depends]);
}
