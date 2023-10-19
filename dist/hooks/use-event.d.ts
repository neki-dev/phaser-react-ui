/// <reference types="node" />
import EventEmitter from 'events';
/**
 * Subscribe to event.
 *
 * @param emitter - Events emitter
 * @param event - Event
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export declare function useEvent(emitter: EventEmitter, event: string, callback: () => void, depends: any[]): void;
