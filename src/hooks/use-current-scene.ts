import type Phaser from 'phaser';
import { useContext } from 'react';
import { SceneContext } from '../context/scene';

export function useCurrentScene<T extends Phaser.Scene>(): T {
  const scene = useContext(SceneContext) as T;

  if (!scene) {
    throw Error('Undefined scene context');
  }

  return scene;
}
