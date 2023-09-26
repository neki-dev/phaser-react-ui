import { useMemo } from 'react';
import { useGame } from './use-game';

export function useTexture(key: string) {
  const game = useGame();

  return useMemo(
    () => game.textures.get(key).getSourceImage() as HTMLImageElement,
    [key],
  );
}
