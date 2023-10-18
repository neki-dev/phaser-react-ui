import type Phaser from 'phaser';
/**
 * Subscribe to scene update.
 *
 * @param scene - Scene
 * @param callback - Update callback
 * @param depends - Callback dependencies
 */
export declare function useSceneUpdate(scene: Phaser.Scene, callback: () => void, depends: any[]): void;
