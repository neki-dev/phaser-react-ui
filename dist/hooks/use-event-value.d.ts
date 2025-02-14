import type Phaser from 'phaser';
/**
 * Get actual value from event.
 *
 * @param emitter - Events emitter
 * @param event - Event
 * @param defaultValue - Default value
 */
export declare function useEventValue<T>(emitter: Phaser.Events.EventEmitter | null, event: string, defaultValue: T): T;
