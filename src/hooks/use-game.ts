import type Phaser from 'phaser';
import { useContext } from 'react';
import { SceneContext } from '../context/scene';

export function useGame<T extends Phaser.Game>(): T {
  const scene = useContext(SceneContext);

  if (!scene) {
    throw Error('Undefined scene context');
  }

  return scene.game as T;
}
