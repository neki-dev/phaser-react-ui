import type Phaser from 'phaser';
import { useEffect } from 'react';

export function useSceneUpdate(scene: Phaser.Scene, callback: () => void, depends: any[] = []) {
  useEffect(() => {
    callback();

    scene.events.on('update', callback);

    return () => {
      scene.events.off('update', callback);
    };
  }, depends);
}
