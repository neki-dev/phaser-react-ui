import type Phaser from 'phaser';
/**
 * Subscribe to event.
 *
 * @param emitter - Events emitter
 * @param event - Event
 * @param callback - Event callback
 * @param depends - Callback dependencies
 */
export declare function useEvent(emitter: Phaser.Events.EventEmitter | null, event: string, callback: (...args: any[]) => void, depends: any[]): void;
