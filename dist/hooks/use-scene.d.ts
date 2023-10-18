import type Phaser from 'phaser';
/**
 * Get scene by key.
 *
 * @param key - Scene key
 */
export declare function useScene<T extends Phaser.Scene>(key: string): T;
