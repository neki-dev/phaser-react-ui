import type Phaser from 'phaser';
import { useGame } from './use-game';

export function useScene<T extends Phaser.Scene>(key: string): T {
  const game = useGame();

  return game.scene.getScene<T>(key);
}
