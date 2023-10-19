import EventEmitter from 'events';
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
  emitter: EventEmitter,
  event: string,
  callback: () => void,
  depends: any[],
) {
  useEffect(() => {
    emitter.on(event, callback);

    return () => {
      emitter.off(event, callback);
    };
  }, [event, ...depends]);
}
