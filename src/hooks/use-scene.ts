import type Phaser from 'phaser';
import { useMemo } from 'react';
import { useGame } from './use-game';

export function useScene<T extends Phaser.Scene>(key: string): T {
  const game = useGame();

  return useMemo(() => game.scene.getScene<T>(key), [key]);
}
